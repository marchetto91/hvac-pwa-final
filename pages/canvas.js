import dynamic from 'next/dynamic';

const CanvasDesigner = dynamic(() => import('../components/CanvasDesigner'), { ssr: false });

export default function CanvasPage() {
  return <CanvasDesigner />;
}

