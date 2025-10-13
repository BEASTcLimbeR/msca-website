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
                  <th className="px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider w-80">
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
                  <th className="px-4 py-2 text-center text-xs font-medium uppercase tracking-wider w-96">
                    <div className="grid grid-cols-3 gap-6">
                      <span className="bg-white text-orange-600 px-4 py-1 rounded text-xs font-semibold">LEAD</span>
                      <span className="bg-white text-orange-600 px-4 py-1 rounded text-xs font-semibold">SPEED</span>
                      <span className="bg-white text-orange-600 px-4 py-1 rounded text-xs font-semibold">BOULDER</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                      <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                      <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                      <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">-</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">-</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">-</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">4</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">4</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
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
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHANSHREE LEKURWALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARUNDHATI JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ASHUTOSH DHOKALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 104-106 - IMF 21ST SPORT CLIMBING CHAMPIONSHIP - NATIONAL IMF 2015 (SR. NO 20) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={3}>
                     20
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={3}>
                     IMF 21ST SPORT CLIMBING CHAMPIONSHIP - NATIONAL IMF 2015 (VENUE - DELHI)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2015
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 107-108 - IFSC INTERNATIONAL COMPETITION (KAZHAKISTAN 2016) - (SR. NO 21) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={2}>
                     21
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={2}>
                     IFSC INTERNATIONAL COMPETITION (KAZHAKISTAN 2016)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 109-126 - MAYOR CUP (VENUE - PUNE 2016) - (SR. NO 22) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={18}>
                     22
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={18}>
                     MAYOR CUP (VENUE - PUNE 2016)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRFAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIKHIL MAGRONWAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANYAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHANASHREE LEKURWALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJ SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHWETA INDULKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PREETI WALKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARUNDHATI JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AMYE LAMBAT
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YASH BALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANMAN GOSAWI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUI KULKARNI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ADWAIT MULIK
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S KIDS BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DAWLAT SURVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S KIDS BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANANYA ANBHULE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S KIDS GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 127-140 - IMF 22ND WEST ZONE COMPETITION 2016 - ZONAL (VENUE - AHMEDABAD) - (SR. NO 23) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={14}>
                     23
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={14}>
                     IMF 22ND WEST ZONE COMPETITION 2016 - ZONAL (VENUE - AHMEDABAD)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     BUNTY KAKDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHANSHREE LEKURWALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VINAY GAIKWAD
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHWETA INDULKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARUNDHATI JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 141-144 - IMF 22ND SPORT CLIMBING CHAMPIONSHIP - NATIONAL IMF 2016 (VENUE - BANGLORE) - (SR. NO 24) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={4}>
                     24
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={4}>
                     IMF 22ND SPORT CLIMBING CHAMPIONSHIP - NATIONAL IMF 2016 (VENUE - BANGLORE)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2016
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 145-147 - IFSC INTERNATIONAL COMPETITION (SINGAPORE 2017) - (SR. NO 25) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={3}>
                     25
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={3}>
                     IFSC INTERNATIONAL COMPETITION (SINGAPORE 2017)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 148-165 - IMF 23RD WEST ZONE COMPETITION 2017 - ZONAL (VENUE - INDORE) - (SR. NO 26) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={18}>
                     26
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={18}>
                     IMF 23RD WEST ZONE COMPETITION 2017 - ZONAL (VENUE - INDORE)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRFAN SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
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
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ABHISHEK KAMTHE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHANSHREE LEKURWALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DIKSH MALWIYA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHWETA INDULKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
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
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ATHARVA INGLE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJ SHINDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARUNDHATI JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAHUL VISHWAKARMA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ASHUTOSH DOKALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2017
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 166-172 - IMF 23RD SPORT CLIMBING CHAMPIONSHIP - NATIONAL IMF 2018 (VENUE - INDORE) - (SR. NO 27) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={7}>
                     27
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={7}>
                     IMF 23RD SPORT CLIMBING CHAMPIONSHIP - NATIONAL IMF 2018 (VENUE - INDORE)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHRYEA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">0</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARUNDHATI JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 173-179 - IMF CUP SPORT CLIMBING COMPETITION 2018 - OPEN NATIONAL (VENUE - JAMSHEDPUR) - (SR. NO 28) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={7}>
                     28
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={7}>
                     IMF CUP SPORT CLIMBING COMPETITION 2018 - OPEN NATIONAL (VENUE - JAMSHEDPUR)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARUNDHATI JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAEE PUNEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIRMAYEE NEVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 180-189 - IMF CUP SPORT CLIMBING COMPETITION 2018 - OPEN NATIONAL (VENUE - SHRINAGAR) - (SR. NO 29) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={10}>
                     29
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={10}>
                     IMF CUP SPORT CLIMBING COMPETITION 2018 - OPEN NATIONAL (VENUE - SHRINAGAR)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARNAV KHANJODE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARUNDHATI JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DIKSHA BODKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHANASHREE LEKURWALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 190-194 - IMF 24TH NATIONAL SPORT CLIMBING COMPETITION 2019 NATIONAL (VENUE - BANGLORE) - (SR. NO 30) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={5}>
                     30
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={5}>
                     IMF 24TH NATIONAL SPORT CLIMBING COMPETITION 2019 NATIONAL (VENUE - BANGLORE)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
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
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOHHA DIWAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIRMAYEE NEVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 195 - IFSC INTERNATIONAL COMPETITION - ASIAN GAMES (JARKTA 2018) - (SR. NO 31) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     31
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     IFSC INTERNATIONAL COMPETITION - ASIAN GAMES (JARKTA 2018)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 196-199 - IFSC INTERNATIONAL COMPETITION - ASIAN YOUTH CHAMPIONSHIP (CHINA 2018) - (SR. NO 32) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={4}>
                     32
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={4}>
                     IFSC INTERNATIONAL COMPETITION - ASIAN YOUTH CHAMPIONSHIP (CHINA 2018)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARUNDHATI JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOHHA DIWAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 200-205 - IFSC INTERNATIONAL COMPETITION - ASIAN KIDS CHAMPIONSHIP (BANGKOK 2018) - (SR. NO 33) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={6}>
                     33
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={6}>
                     IFSC INTERNATIONAL COMPETITION - ASIAN KIDS CHAMPIONSHIP (BANGKOK 2018)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANANYA ANBHULE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DIKSHA BODKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ADHIRAJ MAGAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIRMAYEE NEVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAEE PUNEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2018
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 206-209 - IFSC INTERNATIONAL COMPETITION - ASIAN KIDS CHAMPIONSHIP CHINA 2019) - (SR. NO 34) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={4}>
                     34
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={4}>
                     IFSC INTERNATIONAL COMPETITION - ASIAN KIDS CHAMPIONSHIP CHINA 2019)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANANYA ANBHULE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DIKSHA BODKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">5</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ADHIRAJ MAGAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUMEET MORE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 210-217 - IMF CUP SPORT CLIMBING COMPETITION 2019 - OPEN NATIONAL (VENUE - DARJEELING) - (SR. NO 35) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={8}>
                     35
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={8}>
                     IMF CUP SPORT CLIMBING COMPETITION 2019 - OPEN NATIONAL (VENUE - DARJEELING)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ATHARWA INGLE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SMITA GOKHALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DIKSHA BODKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAHUL VISHWAKARMA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 218-222 - IMF CUP SPORT CLIMBING COMPETITION 2019 - OPEN NATIONAL (VENUE - SIKKIM) - (SR. NO 36) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={5}>
                     36
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={5}>
                     IMF CUP SPORT CLIMBING COMPETITION 2019 - OPEN NATIONAL (VENUE - SIKKIM)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANANYA ANBHULE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DIKSHA BODKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 223 - IFSC INTERNATIONAL COMPETITION - WORLD CUP (CHINA 2019) - (SR. NO 37) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     37
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     IFSC INTERNATIONAL COMPETITION - WORLD CUP (CHINA 2019)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 224 - IFSC INTERNATIONAL COMPETITION - WORLD CUP (CHAMUNICKS and BRAINCON 2019) - (SR. NO 38) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     38
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     IFSC INTERNATIONAL COMPETITION - WORLD CUP (CHAMUNICKS and BRAINCON 2019)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 225-227 - IFSC INTERNATIONAL COMPETITION - WORLD CHAMPIONSHIP (JAPAN 2019) - (SR. NO 39) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={3}>
                     39
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={3}>
                     IFSC INTERNATIONAL COMPETITION - WORLD CHAMPIONSHIP (JAPAN 2019)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHANSHREE LEKURWALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 228-231 - IFSC INTERNATIONAL COMPETITION - WORLD YOUTH CHAMPIONSHIP (ITALY 2019) - (SR. NO 40) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={4}>
                     40
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={4}>
                     IFSC INTERNATIONAL COMPETITION - WORLD YOUTH CHAMPIONSHIP (ITALY 2019)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOHHA DIWAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 232-236 - IFSC INTERNATIONAL COMPETITION - ASIAN YOUTH CHAMPIONSHIP (BANGLORE 2019) - (SR. NO 41) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={5}>
                     41
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={5}>
                     IFSC INTERNATIONAL COMPETITION - ASIAN YOUTH CHAMPIONSHIP (BANGLORE 2019)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH A
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH A
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MRUNAL THAKKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH A
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2019
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 237-243 - IMF 25TH NATIONAL SPORT CLIMBING CHAMPIONSHIP 2020 (VENUE - BHUBNESHWAR) - (SR. NO 42) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={7}>
                     42
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={7}>
                     IMF 25TH NATIONAL SPORT CLIMBING CHAMPIONSHIP 2020 (VENUE - BHUBNESHWAR)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2020
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2020
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2020
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2020
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAHUL VISHWAKARMA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2020
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARNAV KHANJODE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2020
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DIKSHA BODKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2020
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 244 - AUSTRIA TRAINNING 2021/1 MONTH - (SR. NO 43) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     43
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     AUSTRIA TRAINNING 2021/1 MONTH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2021
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 245 - SOVLVENIA WOLRD CUP 2021 - (SR. NO 44) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     44
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     SOVLVENIA WOLRD CUP 2021
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2021
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 246 - WORLD CHAMPINSHIP RUSSIA MOSCOW 2021 - (SR. NO 45) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     45
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     WORLD CHAMPINSHIP RUSSIA MOSCOW 2021
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRTIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2021
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 247-248 - WORLD YOUTH CHAMPIONSHIP RUSSIA MOSCOW - (SR. NO 46) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={2}>
                     46
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={2}>
                     WORLD YOUTH CHAMPIONSHIP RUSSIA MOSCOW
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH A
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2021
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
                     2021
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 249-261 - TATA STEEL SPORT CLIMBING CHAMPIONSHIP JAMSHEDHPUR 22 TO 26 FEB 2022 - (SR. NO 47) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={13}>
                     47
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={13}>
                     TATA STEEL SPORT CLIMBING CHAMPIONSHIP JAMSHEDHPUR 22 TO 26 FEB 2022 (8 GOLD, 6 SILVER, 9 BRONZE)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH A GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANANAYA ANBHULE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAHULVISHWAKARAMA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIMISH DHANGEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH B BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUMEET MORE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU GHONGDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NEIL WARKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JIZA MALVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU HANDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">4</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRAVATI TATOOSKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHRUVI PADWAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS GIRL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARIANA KULKARNI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS GIRL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 262 - ASIAN GAMES TRIALS - (SR. NO 48) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     48
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     ASIAN GAMES TRIALS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">4</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 263-282 - 26TH IMF WEST ZONE CLIMBING CHAMPIONSHIP 2022 PUNE, MAHARASHTRA - (SR. NO 49) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={20}>
                     49
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={20}>
                     26TH IMF WEST ZONE CLIMBING CHAMPIONSHIP 2022 PUNE, MAHARASHTRA (17 GOLD, 9 SILVER, 12 BRONZE)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHAVAL ADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ASHUTOSH DHOKALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIRMAYEE NEVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHANASHRI LEKURWALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHREYA NANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIMISH DHANGEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAHUL VISHWAKARMA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ROHAN GAIKWAD
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YUVRAJ JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANANYA ANBHULE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOUMYA KASTURE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUMEET MORE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUTURAJ NIKAM
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUDRA SALUNKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU GHONGDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRAWATI TATOOSKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU HANDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 283-288 - IMF 26TH NATIONAL SPORT CLIMBING CHAMPIONSHIP - NATIONAL(2022) UTTARKASHI, UTTARAKHAND - (SR. NO 50) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={6}>
                     50
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={6}>
                     IMF 26TH NATIONAL SPORT CLIMBING CHAMPIONSHIP - NATIONAL(2022) UTTARKASHI, UTTARAKHAND
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIRMAYEE NEVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAHUL VISHWAKARMA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIMISH DHANGEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANANYA ANBHULE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU GHONGADE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUBJUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 289-291 - IFSC WORLD CUP JAKARTA 2022 - (SR. NO 51) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={3}>
                     51
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={3}>
                     IFSC WORLD CUP JAKARTA 2022
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 292-304 - ASIAN KIDS CHAMPIONSHIP, JAMSHEDPUR, INDIA(2022) - (SR. NO 52) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={13}>
                     52
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={13}>
                     ASIAN KIDS CHAMPIONSHIP, JAMSHEDPUR, INDIA(2022)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU HANDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJWARDHAN SHEDGE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU GHONGADE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRAWATI TATOOSKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JIZA MALVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJNANDINI CHAWALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOUMYA JOSHI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUMIT MORE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUDRA SALUNKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NEIL WARKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KALASH MITHARI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RURURAJ NIKAM
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PRAYAG AMBETI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 305-307 - NILGIRI CUP, WELLINGTON(2022) - (SR. NO 53) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={3}>
                     53
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={3}>
                     NILGIRI CUP, WELLINGTON(2022)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ROHAN GAIKWAD
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 308-316 - TATA STEEL SPORT CLIMBING CHAMPIONSHIP JAMSHEDHPUR 2023 - (SR. NO 54) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={9}>
                     54
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={9}>
                     TATA STEEL SPORT CLIMBING CHAMPIONSHIP JAMSHEDHPUR 2023 (6 GOLD, 3 SILVER, 7 BRONZE)
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU HANDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU GHONGADE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJWARDHAN SHEDGE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHRUVI PADWAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARIANA KULKARNI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRAWATI TATOOSKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANAY PINGALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANVI KADLAG
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 317-320 - NATIONAL OPEN SPORT CLIMBING CHAMPIONSHIP, WEST BENGAL - (SR. NO 55) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={4}>
                     55
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={4}>
                     NATIONAL OPEN SPORT CLIMBING CHAMPIONSHIP, WEST BENGAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUTURAJ NIKAM
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NEIL WARKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUBJUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHRUVI PADWAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUBJUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANAY PINGALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 321-323 - IMF NILGIRI CUP,2022 - (SR. NO 56) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={3}>
                     56
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={3}>
                     IMF NILGIRI CUP,2022
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2021
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ROHAN GAIKWAD
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2022
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 324-341 - CATAPULT CUP,2023 3rd HYDERABAD OPEN NATIONAL BOULDER CHAMPIONSHIP - (SR. NO 57) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={18}>
                     57
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={18}>
                     CATAPULT CUP,2023 3rd HYDERABAD OPEN NATIONAL BOULDER CHAMPIONSHIP
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     TANISH NAVRE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     Ameture
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ADVAT MULIK
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     Ameture
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VED BHUTKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     Ameture
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VIRAJ DESAI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS MIX BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANSKAR KHATAVKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS MIX BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ARNAV GODBOLE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KIDS MIX BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU HANDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUBJUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU GHONGADE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUBJUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PRAYAG AMBETI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUBJUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KALASH MITHARI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUBJUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJVARDHAN SHEDGE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SUBJUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIMISH DHANGEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAHUL VISHVAKARMA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YUVRAJ JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ASHUTOSH DHOKALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ROHAN GAIKWAD
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJASHRI CHOUDHARY
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 342 - EQINOX BOULDER CUP IMF 2023 GOA - (SR. NO 58) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     58
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     EQINOX BOULDER CUP IMF 2023 GOA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 343-344 - ASIA CUP SINGAPORE JUNE 2023 - (SR. NO 59) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={2}>
                     59
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={2}>
                     ASIA CUP SINGAPORE JUNE 2023
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YUVRAJ JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH A BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 345 - WORLD CHAMPIONSHIP 2023 BERN SWIZERLAND - (SR. NO 60) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     60
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     WORLD CHAMPIONSHIP 2023 BERN SWIZERLAND
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 346-349 - NATIONAL YOUTH CUP AUG 2023 YAVANIKA BANGLORE 2023 - (SR. NO 61) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={4}>
                     61
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={4}>
                     NATIONAL YOUTH CUP AUG 2023 YAVANIKA BANGLORE 2023
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIMISH DHANGEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAHUL VISHWAKARAMA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUTURAJ NIKAM
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 350-355 - KIDS CLIMBING CHAMPIONSHIP CLIMB CITY NOIDA 8/13/2023 - (SR. NO 62) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={6}>
                     62
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={6}>
                     KIDS CLIMBING CHAMPIONSHIP CLIMB CITY NOIDA 8/13/2023
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOUMYA KASTURE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHRUVI PADWAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SPIDER KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AARAINA KULKARNI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SPIDER KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU HANDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SPIDER KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJVARDHAN SHEDGE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SPIDER KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PRAYAG AMBETI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SPIDER KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 356 - 1ST MALE MAHARASTRA SHIVCHATRAPATI RAJYA KRIDA PURASKAR SPORT CLIMBING 2021-2022 - (SR. NO 63) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     63
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     1ST MALE MAHARASTRA SHIVCHATRAPATI RAJYA KRIDA PURASKAR SPORT CLIMBING 2021-2022
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK SAVLARAM MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 357 - 19 TH ASIAN GAMES HANGZHOU 2022 CHINA ASIAN GAMES PARTICIPANT - (SR. NO 64) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     64
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     19 TH ASIAN GAMES HANGZHOU 2022 CHINA ASIAN GAMES PARTICIPANT
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">17</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">6</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 358 - IFSC ASIA -CONTINENTAL YOUTH CHAMPIONSHIP CHONGQING 18 TH 23RD CHINA - (SR. NO 65) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     65
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     IFSC ASIA -CONTINENTAL YOUTH CHAMPIONSHIP CHONGQING 18 TH 23RD CHINA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIMISH DHANGEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 359 - (Competition Name is empty) - (SR. NO 66) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={1}>
                     66
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={1}>
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOUMYA KASTURE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">PARTICIPATED</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 360-378 - 27TH IMF WEST ZONE SPORT CLIMBING CHAMPIONSHIP 2 ND NOVEMBER 2023 THIRD PLACE UDAIPUR RAJSTHAN - (SR. NO 67) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={19}>
                     67
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={19}>
                     27TH IMF WEST ZONE SPORT CLIMBING CHAMPIONSHIP 2 ND NOVEMBER 2023 THIRD PLACE UDAIPUR RAJSTHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PRAYA AMBETI
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJVARDHAN SHEDGE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NEIL WARKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JIZA MALVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU HANDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRAWATI TATOOSKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIMISH DHANGEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUDRA SALUNKHE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUTURAJ NIKAM
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOUMYA KASTURE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHANASHRI LEKURWALE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DIKSHA MALVIYA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     AJIJ SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     HRITIK MARNE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MENS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     ANANYA ANBHULE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YUVRAJ JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU GHONGDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     S J GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 379-380 - ASIAN K CONTINETAL CHAMPIONSHIP DEC JAMSHEDHPUR 2023 - (SR. NO 68) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={2}>
                     68
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={2}>
                     ASIAN K CONTINETAL CHAMPIONSHIP DEC JAMSHEDHPUR 2023
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHRUVI PADWAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D GIRL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJVARDHAN SHEDGE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 381-384 - 27TH NATIONAL SPORT CLIMBING CHAMPIONSHIP BENGLURU, KARNATAKA - (SR. NO 69) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={4}>
                     69
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={4}>
                     27TH NATIONAL SPORT CLIMBING CHAMPIONSHIP BENGLURU, KARNATAKA
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIMSH DHANGEKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHIRAJ KALSHIT
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     PARA OPEN MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 385-392 - TATA STEEL SPORT CLIMBING CHAMPIONSHIP JAMSHEDHPUR 2023 - (SR. NO 70) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={7}>
                     70
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={7}>
                     TATA STEEL SPORT CLIMBING CHAMPIONSHIP JAMSHEDHPUR 2023
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU HANDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     IRAWATI TATOOSKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJVARDHAN SHEDGE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH C BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHRUVI PADWAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KEYA REVANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YOUTH D GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     TRISHA SAKPAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SPIDER KIDS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2023
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     SPEED RELAY
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>

                 {/* Row 393-407 - 28th IMF West Zone Championship 2024 - (SR. NO 71) */}
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200" rowSpan={15}>
                     71
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200" rowSpan={15}>
                     28th IMF West Zone Championship 2024
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     VICKY BHALERAO
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHIL KHAN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     YUVRAJ JADHAV
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     OPEN MEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SANIYA SHAIKH
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NIRMAYEE NEVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     WOMEN
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUDRA SALUNKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RUTURAJ NIKAM
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR BOYS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SHARAYU GHONGDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SOUMYA KASTURE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JUNIOR GIRLS
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     NEIL WARKE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     RAJWARDHAN SHEDGE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     DHRUVI PADWAL
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     SAHARYU HANDE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">2</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">1</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     JIZA MALVE
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="bg-white border-b border-gray-200">
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     KEYA REVANKAR
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 border-r border-gray-200">
                     
                   </td>
                   <td className="px-4 py-4 text-sm text-gray-900 text-center border-r border-gray-200">
                     2024
                   </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center w-96">
                    <div className="grid grid-cols-3 gap-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
                       <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded text-xs font-medium">3</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded text-xs">NA</span>
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
