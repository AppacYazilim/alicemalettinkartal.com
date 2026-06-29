import { useEffect, useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { translate } from "../locales/translate";

type Country = {
  isim: string;
  bayrak: string;
  lat: number;
  lng: number;
  bolge: string;
};

const ulkeler: Country[] = [
  { isim: "Almanya", bayrak: "🇩🇪", lat: 51.1657, lng: 10.4515, bolge: "Batı Avrupa" },
  { isim: "Arnavutluk", bayrak: "🇦🇱", lat: 41.1533, lng: 20.1683, bolge: "Güney Avrupa" },
  { isim: "Azerbaycan", bayrak: "🇦🇿", lat: 40.1431, lng: 47.5769, bolge: "Kafkasya/Orta Asya" },
  { isim: "Belarus", bayrak: "🇧🇾", lat: 53.7098, lng: 27.9534, bolge: "BDT/Rusya" },
  { isim: "Birleşik Arap Emirlikleri", bayrak: "🇦🇪", lat: 23.4241, lng: 53.8478, bolge: "Orta Doğu" },
  { isim: "Bosna Hersek", bayrak: "🇧🇦", lat: 43.9159, lng: 17.6791, bolge: "Güney Avrupa" },
  { isim: "Bulgaristan", bayrak: "🇧🇬", lat: 42.7339, lng: 25.4858, bolge: "Doğu Avrupa" },
  { isim: "Cezayir", bayrak: "🇩🇿", lat: 28.0339, lng: 1.6596, bolge: "Kuzey Afrika" },
  { isim: "Çek Cumhuriyeti", bayrak: "🇨🇿", lat: 49.8175, lng: 15.473, bolge: "Doğu Avrupa" },
  { isim: "Fas", bayrak: "🇲🇦", lat: 31.7917, lng: -7.0926, bolge: "Kuzey Afrika" },
  { isim: "Fransa", bayrak: "🇫🇷", lat: 46.6034, lng: 1.8883, bolge: "Batı Avrupa" },
  { isim: "Hırvatistan", bayrak: "🇭🇷", lat: 45.1, lng: 15.2, bolge: "Güney Avrupa" },
  { isim: "Irak", bayrak: "🇮🇶", lat: 33.2232, lng: 43.6793, bolge: "Orta Doğu" },
  { isim: "İngiltere", bayrak: "🇬🇧", lat: 55.3781, lng: -3.436, bolge: "Batı Avrupa" },
  { isim: "İran", bayrak: "🇮🇷", lat: 32.4279, lng: 53.688, bolge: "Orta Doğu" },
  { isim: "İtalya", bayrak: "🇮🇹", lat: 41.8719, lng: 12.5674, bolge: "Güney Avrupa" },
  { isim: "Karadağ", bayrak: "🇲🇪", lat: 42.7087, lng: 19.3744, bolge: "Güney Avrupa" },
  { isim: "Makedonya", bayrak: "🇲🇰", lat: 41.6086, lng: 21.7453, bolge: "Güney Avrupa" },
  { isim: "Mısır", bayrak: "🇪🇬", lat: 26.8206, lng: 30.8025, bolge: "Kuzey Afrika" },
  { isim: "Polonya", bayrak: "🇵🇱", lat: 51.9194, lng: 19.1451, bolge: "Doğu Avrupa" },
  { isim: "Portekiz", bayrak: "🇵🇹", lat: 39.3999, lng: -8.2245, bolge: "Batı Avrupa" },
  { isim: "Romanya", bayrak: "🇷🇴", lat: 45.9432, lng: 24.9668, bolge: "Doğu Avrupa" },
  { isim: "Rusya", bayrak: "🇷🇺", lat: 61.524, lng: 105.3188, bolge: "BDT/Rusya" },
  { isim: "Slovakya", bayrak: "🇸🇰", lat: 48.669, lng: 19.699, bolge: "Doğu Avrupa" },
  { isim: "Sırbistan", bayrak: "🇷🇸", lat: 44.0165, lng: 21.0059, bolge: "Güney Avrupa" },
  { isim: "Ukrayna", bayrak: "🇺🇦", lat: 48.3794, lng: 31.1656, bolge: "BDT/Rusya" },
  { isim: "Yemen", bayrak: "🇾🇪", lat: 15.5527, lng: 48.5164, bolge: "Orta Doğu" },
  { isim: "Yunanistan", bayrak: "🇬🇷", lat: 39.0742, lng: 21.8243, bolge: "Güney Avrupa" },
  { isim: "Ürdün", bayrak: "🇯🇴", lat: 30.5852, lng: 36.2384, bolge: "Orta Doğu" },
];

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return {
    x: -radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta),
  };
}

export function MapSection() {
  const pageContext = usePageContext();
  const locale = (pageContext as any).locale || "tr";
  const containerRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selected, setSelected] = useState<Country | null>(null);
  const [hoverCountry, setHoverCountry] = useState<{ name: string; flag: string; x: number; y: number } | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRotateRef = useRef(true);
  const resetViewRef = useRef<() => void>(() => {});

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let renderer: any;
    let scene: any;
    let camera: any;
    let controls: any;
    let raycaster: any;
    let mouse: any;
    let markers: any[] = [];
    let earth: any;
    let frameId: number;
    const cleanupFns: Array<() => void> = [];

    (async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");

      const width = container.clientWidth;
      const height = 600;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      // set camera to initially face the Europe/Middle East region (approx Lat 35, Lng 30)
      const initialCamPos = latLngToVector3(35, 30, 12);
      camera.position.set(initialCamPos.x, initialCamPos.y, initialCamPos.z);

      // Remove any existing canvas in the container to avoid duplicate renderers
      const existingCanvas = container.querySelector("canvas");
      if (existingCanvas) {
        try {
          container.removeChild(existingCanvas);
        } catch (e) {
          /* ignore */
        }
      }

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      // Make canvas focusable for accessibility and keep a ref to it
      try {
        const canv = renderer.domElement as HTMLCanvasElement;
        canv.tabIndex = 0;
        canv.style.outline = "none";
        canvasRef.current = canv;
      } catch (e) {
        /* ignore */
      }

      // Lights
      const ambient = new THREE.AmbientLight(0xffffff, 0.55);
      scene.add(ambient);
      const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
      dirLight.position.set(5, 3, 5);
      scene.add(dirLight);
      const accentLight = new THREE.PointLight(0xff4000, 0.8, 30);
      accentLight.position.set(-8, 0, 8);
      scene.add(accentLight);

      const radius = 4;

      // Try to load realistic earth texture from a CDN. Fallback to blue-green color.
      const textureLoader = new THREE.TextureLoader();
      textureLoader.crossOrigin = "anonymous";

      const earthGeometry = new THREE.SphereGeometry(radius, 96, 96);
      const earthMaterial = new THREE.MeshPhongMaterial({
        color: 0x1e6091,
        emissive: 0x0a2a3a,
        emissiveIntensity: 0.15,
        shininess: 30,
        specular: 0x4488aa,
      });
      earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);

      // Load earth texture asynchronously - if it fails we just keep the blue color
      textureLoader.load(
        "https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg",
        (texture) => {
          earthMaterial.map = texture;
          earthMaterial.color.setHex(0xffffff);
          earthMaterial.emissiveIntensity = 0;
          earthMaterial.needsUpdate = true;
        },
        undefined,
        () => {
          // Texture failed - keep the blue color fallback
        }
      );

      // Subtle atmospheric glow
      const glowGeo = new THREE.SphereGeometry(radius * 1.06, 64, 64);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0x4488ff,
        transparent: true,
        opacity: 0.12,
        side: THREE.BackSide,
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      scene.add(glow);

      // Stars
      const starsGeo = new THREE.BufferGeometry();
      const starCount = 800;
      const positions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        const r = 50 + Math.random() * 30;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
      starsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const starsMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.15,
        transparent: true,
        opacity: 0.7,
      });
      const stars = new THREE.Points(starsGeo, starsMat);
      scene.add(stars);

      // Country markers
      ulkeler.forEach((country) => {
        const pos = latLngToVector3(country.lat, country.lng, radius * 1.01);

        // visible pin (smaller to reduce overlap)
        const pinGeo = new THREE.SphereGeometry(0.025, 12, 12);
        const pinMat = new THREE.MeshBasicMaterial({ color: 0xff4000 });
        const pin = new THREE.Mesh(pinGeo, pinMat);
        pin.position.set(pos.x, pos.y, pos.z);
        pin.renderOrder = 2;
        (pin as any).userData = { country };
        earth.add(pin);

        // invisible larger hit-sphere for easier clicking (not visible but pickable)
        const hitGeo = new THREE.SphereGeometry(0.28, 8, 8);
        const hitMat = new THREE.MeshBasicMaterial({ visible: false });
        const hitSphere = new THREE.Mesh(hitGeo, hitMat);
        hitSphere.position.set(pos.x, pos.y, pos.z);
        (hitSphere as any).userData = { country };
        // add hitSphere to scene (attached to earth so it moves with globe)
        earth.add(hitSphere);
        // only push the hit sphere to markers (so raycaster uses larger area)
        markers.push(hitSphere);

        // subtle pulse ring (smaller, lower opacity to avoid clutter)
        const ringGeo = new THREE.RingGeometry(0.04, 0.055, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xff4000,
          transparent: true,
          opacity: 0.45,
          side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(pos.x, pos.y, pos.z);
        ring.lookAt(0, 0, 0);
        ring.rotateY(Math.PI);
        (ring as any).userData = { isPulse: true, offset: Math.random() * Math.PI * 2 };
        ring.renderOrder = 1;
        earth.add(ring);
      });

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.rotateSpeed = 0.5;
      controls.minDistance = 6;
      controls.maxDistance = 20;
      controls.enablePan = false;

      // Expose reset function for the Fit to View button
      resetViewRef.current = () => {
        const resetCamPos = latLngToVector3(35, 30, 12);
        camera.position.set(resetCamPos.x, resetCamPos.y, resetCamPos.z);
        controls.target.set(0, 0, 0);
        earth.rotation.set(0, 0, 0);
        controls.update();
      };

      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();

      const onMouseMove = (event: MouseEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(markers);
        if (intersects.length > 0) {
          const country: Country = (intersects[0].object as any).userData.country;
          renderer.domElement.style.cursor = "pointer";
          setHoverCountry({
            name: country.isim,
            flag: country.bayrak,
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          });
        } else {
          renderer.domElement.style.cursor = "grab";
          setHoverCountry(null);
        }
      };

      const onClick = (event: MouseEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(markers);
        if (intersects.length > 0) {
          const country: Country = (intersects[0].object as any).userData.country;
          setSelected(country);
        }
      };

      const onResize = () => {
        const w = container.clientWidth;
        camera.aspect = w / height;
        camera.updateProjectionMatrix();
        renderer.setSize(w, height);
      };

      renderer.domElement.addEventListener("mousemove", onMouseMove);
      renderer.domElement.addEventListener("click", onClick);
      window.addEventListener("resize", onResize);
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelected(null);
        }
      };
      window.addEventListener("keydown", onKeyDown);

      // expose canvas cleanup in cleanupFns
      cleanupFns.push(() => {
        canvasRef.current = null;
      });

      cleanupFns.push(() => renderer.domElement.removeEventListener("mousemove", onMouseMove));
      cleanupFns.push(() => renderer.domElement.removeEventListener("click", onClick));
      cleanupFns.push(() => window.removeEventListener("resize", onResize));
      cleanupFns.push(() => window.removeEventListener("keydown", onKeyDown));

      const clock = new THREE.Clock();
      const animate = () => {
        frameId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        if (autoRotateRef.current) {
          earth.rotation.y += 0.0015;
        }
        earth.children.forEach((child: any) => {
          if (child.userData?.isPulse) {
              // smaller, subtler pulsing to avoid large overlapping rings
              const s = 1 + 0.18 * Math.sin(t * 2 + child.userData.offset);
              child.scale.set(s, s, s);
              // keep opacity subtle and bounded
              child.material.opacity = 0.45 - 0.18 * Math.sin(t * 2 + child.userData.offset);
            }
        });
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
    })();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      cleanupFns.forEach((fn) => fn());
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  // focus trap: when drawer opens, trap focus inside and restore on close
  useEffect(() => {
    if (!selected) return;
    const drawer = drawerRef.current;
    if (!drawer) return;
    const prev = document.activeElement as HTMLElement | null;
    // mark main map container as hidden for assistive tech
    try {
      containerRef.current?.setAttribute("aria-hidden", "true");
    } catch (e) {}

    const selector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const nodeList = drawer.querySelectorAll(selector);
    const focusable = Array.from(nodeList).filter((el) => (el as HTMLElement).offsetParent !== null) as HTMLElement[];
    if (focusable.length) focusable[0].focus(); else drawer.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
        return;
      }
      if (e.key !== "Tab") return;
      const elements = focusable;
      if (elements.length === 0) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    drawer.addEventListener("keydown", onKey);
    return () => {
      drawer.removeEventListener("keydown", onKey);
      try {
        containerRef.current?.removeAttribute("aria-hidden");
      } catch (e) {}
      if (prev && prev.focus) prev.focus();
    };
  }, [selected]);

  return (
    <section className="w-full py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 uppercase tracking-wider">
          <span className="text-[#ff4000]">{translate("map.export.highlight", locale)}</span>{" "}
          {translate("map.export.title", locale)}
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          {translate("map.export.description", locale)}
        </p>

        <div className="relative">
          <div
            ref={containerRef}
            className="w-full rounded-2xl overflow-hidden bg-gradient-to-b from-black/60 via-[#1a0a05]/40 to-black/60 border border-[#ff4000]/20 shadow-[0_0_60px_rgba(255,64,0,0.15)] relative"
            style={{ minHeight: 600 }}
          />

          {hoverCountry && (
            <div
              className="pointer-events-none absolute bg-black/90 text-white px-4 py-2 rounded-lg shadow-2xl border border-[#ff4000]/50 font-bold text-base z-10"
              style={{
                left: hoverCountry.x + 20,
                top: hoverCountry.y + 20,
              }}
            >
              <span className="mr-2 text-xl">{hoverCountry.flag}</span>
              {hoverCountry.name}
            </div>
          )}

          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <button
              onClick={() => setAutoRotate((v) => !v)}
              className="bg-black/70 hover:bg-[#ff4000] text-white px-4 py-2 rounded-lg border border-[#ff4000]/40 transition-colors text-sm font-semibold backdrop-blur"
            >
              {autoRotate ? translate("map.rotate.pause", locale) : translate("map.rotate.start", locale)}
            </button>
            <button
              onClick={() => {
                setSelected(null);
                setAutoRotate(true);
                resetViewRef.current();
                // scroll the map container into view so the globe is visible
                setTimeout(() => {
                  try {
                    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    // focus the canvas for keyboard users after scrolling
                    try {
                      canvasRef.current?.focus();
                    } catch (e) {}
                  } catch (e) {
                    /* ignore */
                  }
                }, 60);
              }}
              className="bg-black/70 hover:bg-[#ff4000] text-white px-4 py-2 rounded-lg border border-[#ff4000]/40 transition-colors text-sm font-semibold backdrop-blur"
            >
              {translate("map.reset", locale)}
            </button>
          </div>

          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur px-4 py-2 rounded-lg border border-[#ff4000]/40 text-white text-sm z-10">
            <span className="text-[#ff4000] font-bold">29</span> {translate("map.stats.countries", locale)} ·{" "}
            <span className="text-[#ff4000] font-bold">60+</span> {translate("map.stats.years", locale)}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm">
          {Array.from(new Set(ulkeler.map((u) => u.bolge))).map((bolge) => (
            <span
              key={bolge}
              className="px-3 py-1 bg-white/5 border border-[#ff4000]/30 rounded-full text-gray-300"
            >
              {bolge}
            </span>
          ))}
        </div>
      </div>

      {selected && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setSelected(null)}
            aria-hidden
          />

          <aside
            ref={drawerRef}
            tabIndex={-1}
            className="fixed top-0 right-0 z-50 h-full w-full md:w-[420px] bg-gradient-to-br from-[#1a0a05] to-black border-l border-[#ff4000]/40 p-6 overflow-auto shadow-[0_0_80px_rgba(255,64,0,0.3)] transition-transform duration-280"
            role="dialog"
            aria-modal="true"
            aria-label={translate("map.country.details", locale)}
            onClick={() => setSelected(null)}
          >
            <div className="relative h-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl leading-none"
                aria-label={translate("map.close", locale)}
              >
                ×
              </button>

              <div className="text-center mb-4 mt-6">
                <div className="text-7xl mb-3">{selected.bayrak}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{selected.isim}</h3>
                <p className="text-[#ff4000] mt-1">{selected.bolge}</p>
              </div>

              <div className="mt-4">
                <h4 className="text-sm text-gray-300 mb-2">{translate("map.country.equipment", locale)}</h4>

                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-white/5 border-2 border-dashed border-[#ff4000]/20 rounded-md flex items-center justify-center text-gray-400 text-sm">
                    {translate("map.country.placeholder", locale)}
                  </div>
                  <div className="h-24 bg-white/5 border-2 border-dashed border-[#ff4000]/20 rounded-md flex items-center justify-center text-gray-400 text-sm">
                    {translate("map.country.placeholder", locale)}
                  </div>
                  <div className="h-24 bg-white/5 border-2 border-dashed border-[#ff4000]/20 rounded-md flex items-center justify-center text-gray-400 text-sm">
                    {translate("map.country.placeholder", locale)}
                  </div>
                  <div className="h-24 bg-white/5 border-2 border-dashed border-[#ff4000]/20 rounded-md flex items-center justify-center text-gray-400 text-sm">
                    {translate("map.country.placeholder", locale)}
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-3">{translate("map.country.helper", locale)}</p>
              </div>
            </div>
          </aside>
        </>
      )}
      
      
    </section>
  );
}
