'use client'

import { useRouter } from 'next/navigation'

export default function OurAthletesPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-white relative">
      {/* Back to Home Button - Top Left */}
      <div className="absolute top-4 left-4 z-10">
        <button 
          onClick={() => router.push('/')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Back to Home
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            SPORT CLIMBING ACTIVITIES RESULTS<br />
            UNDER THE ABLE LEADERSHIP OF MR. SURENDRA SHELKE THROUGH DIFFERENT ORGANISATIONS
          </h1>
        </div>

        <div className="max-w-4xl mx-auto text-left space-y-6 text-gray-700 leading-relaxed">
          <p>
            THE FIRST EVER COMPETITION STANDARD CLIMBING WALL AS PER THE PREVAILING STANDARDS OF 2001 WAS 
            CONSTRUCTED IN THE CITY OF PCMC BY THE PCMC AT ANNA SAHEB MAGAR STADIUM. THE CLIMBING WALL WAS 
            17.5 METERS HIGH BUILT FOR LEAD CLIMBING AND WAS THE TALLEST CLIMBING WALL IN THE COUNTRY WHEN 
            ERECTED.
          </p>

          <p>
            IN THE YEAR 2002 THE CITY GOT THE FIRST EVER OFFICIALS FOR SPORT CLIMBING. MR. SHRIKRISHNA KADUSKAR 
            AND MR. SURENDRA SHELKE GOT THE LEVEL 1 CERTIFICATION AS JUDGE IN SPORT CLIMBING THROUGH COURSE 
            AT IMF, NEW DELHI ORGANISED BY IMF WITH SWEDISH CLIMBING AND MOUNTAINEERING FEDERATION.
          </p>

          <p>
            THE FIRST ZONAL LEVEL COMPETITION WAS ORGANISED ON THE CLIMBING WALL AT ANNA SAHEB MAGAR 
            STADIUM, PIMPRI
          </p>
        </div>

        {/* Results Table */}
        <div className="max-w-7xl mx-auto mt-12">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider border-r border-orange-400">
                    SR. NO
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider border-r border-orange-400">
                    COMPETITION NAME
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider border-r border-orange-400">
                    ATHLETE NAME
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider border-r border-orange-400">
                    CATEGORY
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider border-r border-orange-400">
                    YEAR
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                    EVENT RANK
                  </th>
                </tr>
                <tr className="bg-orange-400">
                  <th className="px-4 py-2 text-center text-xs font-medium uppercase tracking-wider border-r border-orange-300">
                    -
                  </th>
                  <th className="px-4 py-2 text-center text-xs font-medium uppercase tracking-wider border-r border-orange-300">
                    -
                  </th>
                  <th className="px-4 py-2 text-center text-xs font-medium uppercase tracking-wider border-r border-orange-300">
                    -
                  </th>
                  <th className="px-4 py-2 text-center text-xs font-medium uppercase tracking-wider border-r border-orange-300">
                    -
                  </th>
                  <th className="px-4 py-2 text-center text-xs font-medium uppercase tracking-wider border-r border-orange-300">
                    -
                  </th>
                  <th className="px-4 py-2 text-center text-xs font-medium uppercase tracking-wider">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="bg-white text-orange-600 px-2 py-1 rounded">LEAD</span>
                      <span className="bg-white text-orange-600 px-2 py-1 rounded">SPEED</span>
                      <span className="bg-white text-orange-600 px-2 py-1 rounded">BOULDER</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Row 1 - Rohan Desai */}
                <tr className="bg-white border-b border-gray-200">
                  <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={2}>
                    1
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={2}>
                    IMF 8TH WEST ZONE COMPETITION 2002 PIMPRI, PUNE, MAHARASHTRA
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                    ROHAN DESAI
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                    JUNIOR BOYS
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                    2002
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                    </div>
                  </td>
                </tr>
                
                 {/* Row 2 - Parmeshwar Jadhav */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PARMESHWAR JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2002
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 3 - Rohan Desai (SR. NO 2) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IMF 9TH WEST ZONE COMPETITION 2003 PIMPRI, PUNE, MAHARASHTRA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ROHAN DESAI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2003
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 4-5 - Indranil Khurangale & Somanth Shinde (SR. NO 3) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={2}>
                     3
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={2}>
                     IMF 10TH WEST ZONE COMPETITION 2004 SIKAR, RAJASTHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     INDRANIL KHURANGALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2005
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOMANTH SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2005
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 6-12 - IMF 11TH WEST ZONE COMPETITION 2005 GOREGAON, MUMBAI (SR. NO 4) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={7}>
                     4
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={7}>
                     IMF 11TH WEST ZONE COMPETITION 2005 GOREGAON, MUMBAI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     INDRANIL KHURANGALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2005
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOMANTH SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2005
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KANCHAN BANSODE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2005
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUJATA GAIKWAD
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2005
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RANJIT SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2005
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AMOL JOGDAND
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2005
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ASHWINI MAHANGADE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2005
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 13 - Special Note for SR. NO 5 */}
                 <tr className="bg-gray-50 border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     5
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" colSpan={4}>
                     <div className="font-semibold text-orange-700 mb-2">
                       IMF 11TH NATIONAL CHAMPIONSHIP COMPETITION 2005 PIMPRI, PUNE, MAHARASHTRA
                     </div>
                     <p className="text-gray-600 italic">
                       THE COMPETITION WAS HOSTED BY PCMC AND PCMA AT ANNASAHEB MAGAR STADIUM IN WHICH THE CLIMBING FRATERNITY IN THE PCMC FOR THE FIRST TIME SAW THE FINEST CLIMBERS CLIMBING. THIS EXPOSURE BOOSTED THE GAME OF SPORT CLIMBING IN PCMC. NO MEDALS
                     </p>
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">-</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">-</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">-</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 14-21 - IMF 12TH WEST ZONE COMPETITION 2006 BIKANER, RAJASTHAN (SR. NO 6) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={8}>
                     6
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={8}>
                     IMF 12TH WEST ZONE COMPETITION 2006 BIKANER, RAJASTHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOMNATH SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2006
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2006
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KANCHAN BANSODE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2006
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2006
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOMNATH SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2006
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SALMAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2006
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRFAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2006
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RANJIT SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2006
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 22-34 - IMF 13TH WEST ZONE COMPETITION 2007 JAIPUR, RAJASTHAN (SR. NO 7) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={13}>
                     7
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={13}>
                     IMF 13TH WEST ZONE COMPETITION 2007 JAIPUR, RAJASTHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     INDRANIL KHURANGALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOMNATH SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAD SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AMOL RANDIVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AMOL JOGDAND
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SALMAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRFAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     LAKHAN JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PRASHANT DONGARE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SURAJ KOHARE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     TUKARAM KAMBLE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VIJAY SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ROHINI GAWALI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2007
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 35-48 - IMF 14TH WEST ZONE COMPETITION 2008 BIKANER, RAJASTHAN (SR. NO 8) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={14}>
                     8
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={14}>
                     IMF 14TH WEST ZONE COMPETITION 2008 BIKANER, RAJASTHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RANJEET SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     INDRANIL KHURUNGALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRFAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAD SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ROHINI GAWALI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SURABHI INGALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAGAR SALVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JAY WALKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">4</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     POOJA BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KAJAL MORE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     POOJA SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">4</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PRIYA BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     TUKARAM KAMBLE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2008
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Historical Note - 2008 Milestone */}
                 <tr className="bg-blue-50 border-b border-gray-200">
                   <td className="px-4 py-6 text-sm text-gray-900 text-center border-r border-gray-200" colSpan={6}>
                     <div className="max-w-4xl mx-auto">
                       <div className="font-semibold text-blue-800 mb-3 text-lg">
                         HISTORIC YEAR 2008 - PCMC'S FIRST INTERNATIONAL OFFICIAL
                       </div>
                       <p className="text-gray-700 leading-relaxed text-base">
                         YEAR 2008 WAS HISTORIC FOR THE PCMC, IN THIS YEAR THE CITY OF PCMC GOT THE FIRST EVER INTERNATIONAL 
                         OFFICIAL IN SPORT CLIMBING. MR. SHRIKRISHNA KADUSKAR BECAME THE SECOND INTERNATIONAL JUDGE IN 
                         THE COUNTRY AFTER COMPLETING HIS TRAINING AT SYDNEY CONDUCTED BY THE INTERNATIONAL FEDERATION 
                         OF SPORT CLIMBING AND SUCCESSFULLY PASSING THE EXAMINATIONS IN LEVEL 1.
                       </p>
                     </div>
                   </td>
                 </tr>

                 {/* Row 49-59 - IMF 16TH WEST ZONE COMPETITION 2010 BHOPAL (SR. NO 9) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={11}>
                     9
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={11}>
                     IMF 16TH WEST ZONE COMPETITION 2010 BHOPAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DEEPA BALLARI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOMNATH SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PUJA BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PUJA SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MRUNAL KALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KAJAL MORE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUNNY JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRFAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAGAR SALVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 60 - IMF 16TH NATIONAL CHAMPIONSHIP COMPETITION 2010 (SR. NO 10) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     10
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IMF 16TH NATIONAL CHAMPIONSHIP COMPETITION 2010 IMF, NEW DELHI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2010
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Historical Note - PCMC Climbing Wall */}
                 <tr className="bg-green-50 border-b border-gray-200">
                   <td className="px-4 py-6 text-sm text-gray-900 text-center border-r border-gray-200" colSpan={6}>
                     <div className="max-w-4xl mx-auto">
                       <div className="font-semibold text-green-800 mb-3 text-lg">
                         PCMC CLIMBING WALL DEVELOPMENT
                       </div>
                       <p className="text-gray-700 leading-relaxed text-base">
                         PIMPRI CHINCHWAD MOUNTAINEERING ASSOCIATION WAS SUCCESSFUL IN ITS TASK OF PROMOTION OF SPORT CLIMBING AS THE PMC CONSTRUCTED THE RAJE SHIVAJI CLIMBING WALL, SHIVAJINAGAR, PUNE. THIS STARTED THE SPORT CLIMBING ACTIVITIES IN PUNE BUT SADLY THE ACTIVITIES IN PCMC STOPPED DUE TO OUTDATED CLIMBING WALL AND LACK OF OTHER FACILITIES ETC.
                       </p>
                     </div>
                   </td>
                 </tr>

                 {/* Row 61-63 - IMF 17TH NATIONAL CHAMPIONSHIP COMPETITION 2011 (SR. NO 11) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={3}>
                     11
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={3}>
                     IMF 17TH NATIONAL CHAMPIONSHIP COMPETITION 2011
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHAELRAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2011
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2011
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOMNATH SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2011
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 64-69 - IMF 18TH WEST ZONE COMPETITION 2012 (SR. NO 12) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={6}>
                     12
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={6}>
                     IMF 18TH WEST ZONE COMPETITION 2012 - ZONAL(SHIVAJINAGAR GAOTHAN, PUNE, 411005)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2012
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2012
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MRUNAL KALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2012
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2012
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     BUNTY KAKDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2012
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     INDRANIL KHURANGLE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2012
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 70-71 - IMF 18TH NATIONAL CHAMPIONSHIP COMPETITION 2012 (SR. NO 13) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={2}>
                     13
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={2}>
                     IMF 18TH NATIONAL CHAMPIONSHIP COMPETITION 2012
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2012
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MRUNAL KALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2012
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 72-78 - IMF 19TH WEST ZONE COMPETITION 2013 (SR. NO 14) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={7}>
                     14
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={7}>
                     IMF 19TH WEST ZONE COMPETITION 2013 - ZONAL, TAPTI VALLEY INTERNATIONAL SCHOOL, SURAT, GUJRAT
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOMNATH SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHRYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUCHA KAIKADE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 79 - IMF 19TH SPORT CLIMBING CHAMPIONSHIP - NATIONAL 2013 (SR. NO 15) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     15
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IMF 19TH SPORT CLIMBING CHAMPIONSHIP - NATIONAL IMF 2013 (VENUE BANGLORE KANTIRVA STADIUM)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 80-86 - IMF 20TH WEST ZONE COMPETITION 2014 - ZONAL (SR. NO 16) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={7}>
                     16
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={7}>
                     IMF 20TH WEST ZONE COMPETITION 2014 - ZONAL (VENUE BEG KHADKI)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRFAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     INDRANIL KHURANGLE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 87-89 - IMF 20TH SPORT CLIMBING CHAMPIONSHIP - NATIONAL 2014 (SR. NO 17) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={3}>
                     17
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={3}>
                     IMF 20TH SPORT CLIMBING CHAMPIONSHIP - NATIONAL IMF 2014 (VENUE KOLKATA SALT LAKE STADIUM)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHRYEA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2014
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 90-92 - IFSC INTERNATIONAL COMPETITION (MALAYSIA 2015) (SR. NO 18) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={3}>
                     18
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={3}>
                     IFSC INTERNATIONAL COMPETITION (MALAYSIA 2015)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2015
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2015
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2015
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 93-103 - IMF 21ST WEST ZONE COMPETITION 2015 - ZONAL (SR. NO 19) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={11}>
                     19
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={11}>
                     IMF 21ST WEST ZONE COMPETITION 2015 - ZONAL (VENUE BEG KHADKI)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2015
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRFAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AMYE LAMBAT
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOHHA DIWAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SMITA GOKHALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2013
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center">
                     <div className="grid grid-cols-3 gap-2">
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
