"use client"

import React from 'react'
import Map from '@/components/Map'
import { useState, useEffect } from 'react';

console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)

export default function location() {
  return (
    <div className='container mx-auto'>
      <div className='container h-128'>
        <Map lat={46.836015} lng={17.4310329} />
      </div>
      <div className='px-2'>
        <h1 className="mt-4 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white text-center">Badacsony a Tapolcai-medence legmagasabb tanúhegye</h1>
        <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <p className="mt-4 indent-4 text-justify">
          A Badacsony a romantika előtt és alatt népszerű vidéki helyszín, művészek találkozóhelye volt, illetve a helyi szüretek fontos társadalmi eseménynek számítottak. E kor jellegzetessége szerint legendák alakultak a hegyről és környezetéről, neves lakóiról és látogatóiról.
        </p>
        <p className="mt-4 text-2xl">A szürkebarát legendája</p>
        <p className="mt-4 indent-4 text-justify">
          A szürkebarátok legendája a szőlészethez és a hegyen egykor élő pálos szerzetesekhez kapcsolódik. A legenda szerint a 13–14. században számos nyugati rend küldött szerzeteseket Magyarországra, és egy alkalommal a felsőtomaji pálos szerzetesrendhez francia szerzetesek látogattak. A történet szerint a francia szerzetesek kedvenc szőlőjük, a pinot gris néhány vesszőjét is magukkal hozták. A szőlővesszőket a Badacsony oldalában nagy gonddal elültették, de mivel ez a szőlő sok gondozást igényelt, idejük nagy részét a hegyoldalon töltötték, s eközben fehér ruhájuk rendre bepiszkolódott. Amikor a munkából hazafelé tartottak, a helyiek látva ezt így szóltak: jönnek a hegyről a szürke barátok.[30][33] A badacsonyi szürkebarát eredetét illetően a legenda egy másik változata annyi említést tesz, hogy azt a szerzetesek azért honosították meg a környéken, mert olyan szőlőt kerestek, amely cukor hozzáadása nélküli is kellemes bort ad minden évben. A miseborhoz ugyanis nem szabad cukrot adni.[34] Erről szól egy legenda, az viszont tény, hogy a Szürkebarát elnevezés a Bortörvényben a II. világháborúig nem fordul elő. A Szürkebarát szó, mint bornév megalkotása, megszületése a XX. század harmincas éveiben történt, a Badacsonyi Eszterházy szőlőbirtokon, annak elismert tiszttartója, Krassay Vilmos úr érdemi bábáskodása mellett.
        </p>
        <p className="mt-4 text-2xl">A Rózsakő legendája</p>
        <p className="mt-4 indent-4 text-justify">
          A Kisfaludy Sándor és Szegedi Róza szerelme körül kialakult legendák egyike a Rózsakőhöz kapcsolódik, miszerint „Hogyha egy leány meg egy legény ráül a kőre, háttal a Balatonnak, egymás kezét fogva, még abban az évben egymáséi lesznek. De az is elég, ha a leány ül a kőre háttal a tónak, rágondol szerelmesére és felsóhajt. Akire gondol, annak a szíve érte fog dobogni.
        </p>
      </div>
    </div>
  )
}
