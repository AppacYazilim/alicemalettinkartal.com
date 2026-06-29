import { useEffect, useRef } from "react";

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, system-ui, sans-serif";

// KBS logo path (viewBox 0 0 35.62 37.78)
const KBS_PATH =
  "M27.87,14.8v17.21h-4.72v-14.94c-.97.3-1.97.52-3,.66v20.05h-4.7v-20.05c-1-.13-1.97-.34-2.91-.63v14.92h-4.72V14.84c-1.11-.75-2.13-1.62-3.04-2.59v14.34H0V.42h4.78v.3c.12,6.19,4.67,11.3,10.67,12.38V0h9.04v4.9h-4.34v8.21c6.04-1.08,10.61-6.26,10.69-12.49v-.29h4.78v26.25h-4.78v-14.35c-.89.96-1.89,1.81-2.97,2.55";

// ── Drawing helpers ──────────────────────────────────────────

function radialCircle(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  rv: number,
  gv: number,
  bv: number,
  a: number
) {
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
  g.addColorStop(0, `rgba(${rv},${gv},${bv},${a})`);
  g.addColorStop(1, "rgba(247,242,234,0)");
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = g;
  ctx.fill();
}

function drawGear(ctx: CanvasRenderingContext2D, r: number, color: string) {
  const teeth = 8;
  ctx.beginPath();
  for (let i = 0; i < teeth; i++) {
    const a1 = (i / teeth) * Math.PI * 2;
    const a2 = ((i + 0.42) / teeth) * Math.PI * 2;
    ctx.lineTo(Math.cos(a1) * r, Math.sin(a1) * r);
    ctx.lineTo(Math.cos(a1) * (r * 1.38), Math.sin(a1) * (r * 1.38));
    ctx.lineTo(Math.cos(a2) * (r * 1.38), Math.sin(a2) * (r * 1.38));
    ctx.lineTo(Math.cos(a2) * r, Math.sin(a2) * r);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.38, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(247,242,234,0.95)";
  ctx.fill();
}

function drawBarChart(ctx: CanvasRenderingContext2D, color: string) {
  const bars = [0.38, 0.55, 0.72, 0.92];
  const bw = 7;
  const gap = 4;
  const total = bars.length * (bw + gap);
  const maxH = 26;
  ctx.fillStyle = color;
  bars.forEach((pct, i) => {
    const x = -total / 2 + i * (bw + gap);
    const bh = pct * maxH;
    ctx.fillRect(x, -bh, bw, bh);
  });
}

function drawCircuit(ctx: CanvasRenderingContext2D, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-16, 2);
  ctx.lineTo(0, 2);
  ctx.lineTo(0, -10);
  ctx.moveTo(0, 2);
  ctx.lineTo(14, 2);
  ctx.lineTo(14, 10);
  ctx.moveTo(-16, 12);
  ctx.lineTo(-6, 12);
  ctx.lineTo(-6, 2);
  ctx.stroke();
  [
    [0, 2],
    [14, 10],
    [-6, 12],
    [0, -10],
  ].forEach(([nx, ny]) => {
    ctx.beginPath();
    ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  });
}

function drawGlobe(ctx: CanvasRenderingContext2D, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  const r = 17;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(0, 0, r, r * 0.48, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.lineTo(0, r);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(0, 0, r * 0.52, r, 0, 0, Math.PI * 2);
  ctx.stroke();
}

// Tall vertical pressure vessel (left tank in product line)
function drawTallTank(ctx: CanvasRenderingContext2D, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";

  const bw = 9, bTop = -16, bBot = 12, dRy = 4.5;

  // Body outline: top dome → right side → bottom dome → left side
  ctx.beginPath();
  ctx.ellipse(0, bTop, bw, dRy, 0, Math.PI, 0, false);
  ctx.lineTo(bw, bBot);
  ctx.ellipse(0, bBot, bw, dRy, 0, 0, Math.PI, false);
  ctx.closePath();
  ctx.stroke();

  // Horizontal seam band
  ctx.beginPath();
  ctx.ellipse(0, -1, bw, 2, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Three legs + cross bar
  const ly = bBot + dRy;
  ctx.beginPath();
  ctx.moveTo(-5.5, ly);    ctx.lineTo(-5.5, ly + 8);
  ctx.moveTo(0, ly);       ctx.lineTo(0, ly + 8);
  ctx.moveTo(5.5, ly);     ctx.lineTo(5.5, ly + 8);
  ctx.moveTo(-7, ly + 6);  ctx.lineTo(7, ly + 6);
  ctx.stroke();

  // Top nozzle body + cap arc
  const tp = bTop - dRy;
  ctx.beginPath();
  ctx.moveTo(-2.5, tp); ctx.lineTo(-2.5, tp - 5);
  ctx.lineTo(2.5, tp - 5); ctx.lineTo(2.5, tp);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(0, tp - 5, 3, 2, 0, Math.PI, 0, false);
  ctx.stroke();
}

// Medium round vertical tank (middle tank in product line)
function drawMediumTank(ctx: CanvasRenderingContext2D, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";

  const bw = 12, bTop = -10, bBot = 9, dRy = 5;

  // Body outline
  ctx.beginPath();
  ctx.ellipse(0, bTop, bw, dRy, 0, Math.PI, 0, false);
  ctx.lineTo(bw, bBot);
  ctx.ellipse(0, bBot, bw, dRy, 0, 0, Math.PI, false);
  ctx.closePath();
  ctx.stroke();

  // Horizontal seam
  ctx.beginPath();
  ctx.ellipse(0, 1, bw, 2.2, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Bottom pipe fitting + flange
  const by = bBot + dRy;
  ctx.beginPath();
  ctx.moveTo(-4, by);  ctx.lineTo(-4, by + 5);
  ctx.moveTo(4, by);   ctx.lineTo(4, by + 5);
  ctx.moveTo(-6, by + 5); ctx.lineTo(6, by + 5);
  ctx.stroke();

  // Top U-handle
  const tp = bTop - dRy;
  ctx.beginPath();
  ctx.moveTo(-4.5, tp);
  ctx.lineTo(-4.5, tp - 4);
  ctx.ellipse(0, tp - 4, 4.5, 3, 0, Math.PI, 0, false);
  ctx.lineTo(4.5, tp);
  ctx.stroke();
}

// Horizontal pressure vessel (right tank in product line)
function drawHorizontalTank(ctx: CanvasRenderingContext2D, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";

  const hw = 16, hh = 10, capRx = 4.5;

  // Body: left cap → bottom → right cap → top (closePath)
  ctx.beginPath();
  ctx.ellipse(-hw, 0, capRx, hh, 0, (3 * Math.PI) / 2, Math.PI / 2, true);
  ctx.lineTo(hw, hh);
  ctx.ellipse(hw, 0, capRx, hh, 0, Math.PI / 2, (3 * Math.PI) / 2, true);
  ctx.closePath();
  ctx.stroke();

  // Two vertical seams dividing tank into 3 chambers
  ctx.beginPath();
  ctx.moveTo(-6, -hh); ctx.lineTo(-6, hh);
  ctx.moveTo(6, -hh);  ctx.lineTo(6, hh);
  ctx.stroke();

  // Side ear handles
  ctx.beginPath();
  ctx.rect(-hw - capRx - 4, -3.5, 4, 7);
  ctx.rect(hw + capRx, -3.5, 4, 7);
  ctx.stroke();

  // Legs with foot plates
  ctx.beginPath();
  ctx.moveTo(-12, hh); ctx.lineTo(-12, hh + 6);
  ctx.moveTo(-14, hh + 6); ctx.lineTo(-10, hh + 6);
  ctx.moveTo(12, hh);  ctx.lineTo(12, hh + 6);
  ctx.moveTo(10, hh + 6); ctx.lineTo(14, hh + 6);
  ctx.stroke();
}

function drawCityline(
  ctx: CanvasRenderingContext2D,
  ox: number,
  oy: number,
  totalW: number,
  maxH: number,
  color: string
) {
  const blocks = [
    [0, 0.35, 0.11, 0.65],
    [0.12, 0.12, 0.10, 0.88],
    [0.23, 0.45, 0.08, 0.55],
    [0.32, 0.05, 0.11, 0.95],
    [0.44, 0.28, 0.09, 0.72],
    [0.54, 0.18, 0.10, 0.82],
    [0.65, 0.38, 0.09, 0.62],
    [0.75, 0.22, 0.11, 0.78],
    [0.87, 0.42, 0.08, 0.58],
    [0.96, 0.30, 0.04, 0.70],
  ];
  ctx.fillStyle = color;
  blocks.forEach(([bx, _by, bw, bh]) => {
    ctx.fillRect(
      ox + bx * totalW,
      oy - bh * maxH,
      bw * totalW,
      bh * maxH
    );
  });
}

function sceneCircle(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  fillColor: string,
  draw: () => void
) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.translate(cx, cy);
  draw();
  ctx.restore();
}

// ── Main illustration ────────────────────────────────────────

function drawIllustration(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  // 1 — Background
  ctx.fillStyle = "#F7F2EA";
  ctx.fillRect(0, 0, w, h);

  // 2 — Watercolor circles
  (
    [
      [w * 0.79, h * 0.26, 230, 74, 144, 226, 0.17],
      [w * 0.93, h * 0.63, 285, 68, 180, 140, 0.15],
      [w * 0.57, h * 0.10, 165, 240, 195, 60, 0.21],
      [w * 0.11, h * 0.42, 195, 220, 90, 70, 0.13],
      [w * 0.06, h * 0.77, 152, 90, 170, 80, 0.17],
      [w * 0.44, h * 0.83, 225, 74, 144, 226, 0.09],
      [w * 0.30, h * 0.17, 102, 180, 80, 200, 0.13],
      [w * 0.66, h * 0.55, 172, 240, 140, 60, 0.11],
    ] as [number, number, number, number, number, number, number][]
  ).forEach(([cx, cy, r, rv, gv, bv, a]) =>
    radialCircle(ctx, cx, cy, r, rv, gv, bv, a)
  );

  // 3 — City silhouette (subtle, behind the right side)
  drawCityline(ctx, w * 0.52, h * 0.88, w * 0.48, h * 0.55, "rgba(28,57,98,0.07)");

  // 4 — KBS logo: large watermark
  const kbsP = new Path2D(KBS_PATH);
  const lsLarge = Math.min(w * 0.22, h * 0.44);
  ctx.save();
  ctx.translate(w * 0.60, h * 0.04);
  ctx.scale(lsLarge / 35.62, lsLarge / 37.78);
  ctx.globalAlpha = 0.07;
  ctx.fillStyle = "#FF4713";
  ctx.fill(kbsP);
  ctx.restore();

  // KBS logo: medium, focal element
  const lsMid = Math.min(w * 0.085, h * 0.175);
  ctx.save();
  ctx.translate(w * 0.655, h * 0.09);
  ctx.scale(lsMid / 35.62, lsMid / 37.78);
  ctx.globalAlpha = 0.72;
  ctx.fillStyle = "#FF4713";
  ctx.fill(kbsP);
  ctx.restore();
  ctx.globalAlpha = 1;

  // 5 — Scene vignette bubbles

  // Gear — upper right (Industry)
  sceneCircle(ctx, w * 0.83, h * 0.22, 52, "rgba(255,71,19,0.11)", () =>
    drawGear(ctx, 20, "rgba(255,71,19,0.68)")
  );

  // Bar chart — far right (Growth)
  sceneCircle(ctx, w * 0.955, h * 0.46, 46, "rgba(28,57,98,0.11)", () =>
    drawBarChart(ctx, "rgba(28,57,98,0.70)")
  );

  // Circuit — right-lower (Technology)
  sceneCircle(ctx, w * 0.77, h * 0.70, 44, "rgba(68,180,140,0.14)", () =>
    drawCircuit(ctx, "rgba(68,180,140,0.72)")
  );

  // Globe — right-center (International)
  sceneCircle(ctx, w * 0.54, h * 0.18, 42, "rgba(240,195,60,0.15)", () =>
    drawGlobe(ctx, "rgba(180,140,20,0.62)")
  );

  // Tall vertical tank — middle-right
  sceneCircle(ctx, w * 0.71, h * 0.46, 46, "rgba(60,100,150,0.12)", () =>
    drawTallTank(ctx, "rgba(60,100,150,0.82)")
  );

  // Medium tank — lower far-right
  sceneCircle(ctx, w * 0.895, h * 0.80, 46, "rgba(28,57,98,0.12)", () =>
    drawMediumTank(ctx, "rgba(28,57,98,0.82)")
  );

  // Horizontal tank — lower center-right
  sceneCircle(ctx, w * 0.62, h * 0.64, 50, "rgba(190,70,35,0.11)", () =>
    drawHorizontalTank(ctx, "rgba(190,70,35,0.82)")
  );

  // 6 — Dashed connector lines between bubbles
  ctx.save();
  ctx.strokeStyle = "rgba(28,57,98,0.13)";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 7]);
  const nodes: [number, number][] = [
    [w * 0.83, h * 0.22],    // 0 gear
    [w * 0.955, h * 0.46],   // 1 bar chart
    [w * 0.77, h * 0.70],    // 2 circuit
    [w * 0.54, h * 0.18],    // 3 globe
    [w * 0.655, h * 0.09],   // 4 KBS focal
    [w * 0.71, h * 0.46],    // 5 tall tank
    [w * 0.895, h * 0.80],   // 6 medium tank
    [w * 0.62, h * 0.64],    // 7 horizontal tank
  ];
  ctx.beginPath();
  ctx.moveTo(nodes[0][0], nodes[0][1]);
  ctx.lineTo(nodes[3][0], nodes[3][1]);
  ctx.moveTo(nodes[0][0], nodes[0][1]);
  ctx.lineTo(nodes[1][0], nodes[1][1]);
  ctx.moveTo(nodes[1][0], nodes[1][1]);
  ctx.lineTo(nodes[2][0], nodes[2][1]);
  ctx.moveTo(nodes[3][0], nodes[3][1]);
  ctx.lineTo(nodes[4][0], nodes[4][1]);
  // tanks interconnected and linked to neighboring icons
  ctx.moveTo(nodes[5][0], nodes[5][1]);
  ctx.lineTo(nodes[0][0], nodes[0][1]);  // tall → gear
  ctx.moveTo(nodes[5][0], nodes[5][1]);
  ctx.lineTo(nodes[7][0], nodes[7][1]);  // tall → horizontal
  ctx.moveTo(nodes[6][0], nodes[6][1]);
  ctx.lineTo(nodes[1][0], nodes[1][1]);  // medium → bar chart
  ctx.moveTo(nodes[6][0], nodes[6][1]);
  ctx.lineTo(nodes[2][0], nodes[2][1]);  // medium → circuit
  ctx.moveTo(nodes[7][0], nodes[7][1]);
  ctx.lineTo(nodes[2][0], nodes[2][1]);  // horizontal → circuit
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  nodes.forEach(([nx, ny]) => {
    ctx.beginPath();
    ctx.arc(nx, ny, 3, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(28,57,98,0.22)";
    ctx.fill();
  });

  // 7 — Small accent dots
  (
    [
      [w * 0.33, h * 0.24, 5, "rgba(74,144,226,0.45)"],
      [w * 0.73, h * 0.14, 4, "rgba(240,180,40,0.55)"],
      [w * 0.86, h * 0.56, 6, "rgba(68,190,140,0.48)"],
      [w * 0.49, h * 0.72, 4, "rgba(220,90,70,0.45)"],
      [w * 0.62, h * 0.85, 5, "rgba(150,80,200,0.40)"],
      [w * 0.91, h * 0.28, 4, "rgba(240,140,60,0.50)"],
      [w * 0.40, h * 0.90, 3, "rgba(74,144,226,0.42)"],
    ] as [number, number, number, string][]
  ).forEach(([cx, cy, r, color]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  });

  // 8 — Left-side gradient (helps photo blend into illustration)
  const leftFade = ctx.createLinearGradient(0, 0, w * 0.48, 0);
  leftFade.addColorStop(0, "rgba(247,242,234,0.55)");
  leftFade.addColorStop(1, "rgba(247,242,234,0)");
  ctx.fillStyle = leftFade;
  ctx.fillRect(0, 0, w * 0.48, h);

  // 9 — Bottom fade (text readability)
  const botFade = ctx.createLinearGradient(0, h * 0.52, 0, h);
  botFade.addColorStop(0, "rgba(247,242,234,0)");
  botFade.addColorStop(1, "rgba(247,242,234,0.92)");
  ctx.fillStyle = botFade;
  ctx.fillRect(0, 0, w, h);
}

// ── Component ────────────────────────────────────────────────

export function AckHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) drawIllustration(canvasRef.current);
    const onResize = () => {
      if (canvasRef.current) drawIllustration(canvasRef.current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="tanis"
      style={{
        position: "relative",
        height: "72vh",
        minHeight: 500,
        maxHeight: 740,
        paddingTop: 64,
        backgroundColor: "#F7F2EA",
        overflow: "hidden",
      }}
    >
      {/* Illustrated canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Portrait photo
          Place portrait.jpg in the public/ folder.
          The illustration CSS filter gives it a warm, drawn quality.
          mix-blend-mode:multiply merges the gray photo background with
          the warm cream canvas — making it look painted/illustrated. */}
      <img
        src="/portrait.jpg"
        alt="Ali Cemalettin Kartal"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "92%",
          width: "auto",
          maxWidth: "44%",
          objectFit: "contain",
          objectPosition: "bottom left",
          filter: "saturate(1.35) contrast(1.12) brightness(1.03) sepia(0.06)",
          mixBlendMode: "multiply",
        }}
        onError={(e) => {
          // Hide broken image icon; canvas placeholder shows instead
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Title overlay — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div
          className="ack-section-pad"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            paddingLeft: 48,
            paddingRight: 48,
            paddingBottom: 40,
          }}
        >
          <p
            style={{
              fontFamily: SANS,
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "#5A5650",
              margin: "0 0 8px 0",
            }}
          >
            İstanbul · Türkiye
          </p>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(30px, 4.5vw, 54px)",
              color: "#111010",
              fontWeight: "bold",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Ali Cemalettin Kartal ile Tanışın
          </h1>
        </div>
      </div>
    </section>
  );
}
