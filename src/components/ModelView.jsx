import { Suspense } from "react"
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import * as THREE from "three"
import Lights from "./Lights"
import IPhone from "./IPhone"
import Loader from "./Loader"

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View index={index} id={gsapType} className={`overflow-hidden w-full h-full absolute ${index === 2 ? "-right-full" : ""}`}>
      {/* Ambient Light */}
      <ambientLight intensity={10} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls makeDefault ref={controlRef} enableZoom={false} enablePan={false} rotateSpeed={0.4} target={new THREE.Vector3(0, 0, 0)} onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())} />

      <group ref={groupRef} name={`${index === 1} ? "small" : "large"`} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhone scale={index === 1 ? [18, 18, 18] : [20, 20, 20]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  )
}
export default ModelView
