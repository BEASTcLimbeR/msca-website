import SimpleClimbingScene from '@/components/SimpleClimbingScene'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 3D Hero Section */}
      <div className="relative">
        <SimpleClimbingScene />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
              Maharashtra Sports
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Climbing Association
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Scaling New Heights • Building Champions • Olympic-Level Excellence
            </p>
            
            <div className="text-base text-gray-300 mb-12 drop-shadow-md">
              🏔️ India's Premier Climbing Facility • 🥇 Training Future Olympians • 🎯 Excellence in Every Climb
            </div>
            
            <div className="text-sm text-gray-400 drop-shadow-sm">
              Ready to build something extraordinary together! 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
