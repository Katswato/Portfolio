//import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";
import { Profile } from "./../profile";
import { Line } from "./../shapes";
import { SectionContent } from "./../sectionContent";
import "./../home.css";


import portfolioFavicon from "./../favicons/PortfolioFavicon.png";

//export function meta({}: Route.MetaArgs) {
//  return [
//    { title: "Raffe Manzanilla Portfolio" },
//    { 
//	  name: "description", 
//	  content: "Hello my name is Raffe Manzanilla. Welcome to my portfolio, here you still see a variety of projects."
//	},
//    {
//      name: "viewport",
//      content:"width=device-width, initial-scale=1.0",
//    },
//	{
//	  httpEquiv: "Content-Security-Policy",
//	  content:
//	    "                                            \
//		 default-src                                 \
//		   'self'                                    \
//		   data: gap: https://ssl.gstatic.com        \
//		   'unsafe-eval'                             \
//		   ;                                         \
//		 style-src                                   \
//		   'self'                                    \
//		   'unsafe-inline'                           \
//		   'unsafe-eval'                             \
//           fonts.googleapis.com                      \
//		   ;                                         \
//         font-src                                    \
//		   'self'                                    \
//		   'unsafe-inline'                           \
//		   'unsafe-eval'                             \
//	       fonts.gstatic.com                         \
//		   ;                                         \
//		 media-src                                   \
//		   *                                         \
//		   ;                                         \
//		 script-src                                  \
//		   'self'                                    \
//		   'unsafe-inline'                           \
//		   'unsafe-eval'                             \
//           https://www.youtube.com                   \
//           https://youtube.com                       \
//		   https://www.youtube.com/s/player/89e685a2/player_ias.vflset/en_US/embed.js \
//           https://www.youtube.com/embed/edhRERpTr1E \
//           https://www.youtube.com/embed/iC2aBLneca8 \
//           https://www.youtube.com/embed/I3CVhHuohG8 \
//           https://www.youtube.com/embed/plvDetf4lO4 \
//           https://www.youtube.com/embed/-FYqe8N6vAg \
//           https://www.youtube.com/embed/8ZaaoXi2v30 \
//           https://www.youtube.com/embed/Yy4bTKURqo4 \
//           https://www.youtube.com/embed/1Q_i-f0icV0 \
//		   ;                                         \
//		 frame-src                                   \
//		   'self'                                    \
//	       'unsafe-inline'                           \
//		   'unsafe-eval'                             \
//           https://www.youtube.com/s/player/89e685a2/player_ias.vflset/en_US/embed.js \
//           https://www.youtube.com                   \
//           https://youtube.com                       \
//           https://www.youtube.com/embed/edhRERpTr1E \
//           https://www.youtube.com/embed/iC2aBLneca8 \
//           https://www.youtube.com/embed/I3CVhHuohG8 \
//           https://www.youtube.com/embed/plvDetf4lO4 \
//           https://www.youtube.com/embed/-FYqe8N6vAg \
//           https://www.youtube.com/embed/8ZaaoXi2v30 \
//           https://www.youtube.com/embed/Yy4bTKURqo4 \
//           https://www.youtube.com/embed/1Q_i-f0icV0 \
//		   ;                                         \
//		 script-src-elem                             \
//		   'self'                                    \
//		   'unsafe-inline'                           \
//           https://www.youtube.com                   \
//           https://youtube.com                       \
//           https://www.youtube.com/s/player/89e685a2/player_ias.vflset/en_US/embed.js \
//           https://www.youtube.com/embed/edhRERpTr1E \
//           https://www.youtube.com/embed/iC2aBLneca8 \
//           https://www.youtube.com/embed/I3CVhHuohG8 \
//           https://www.youtube.com/embed/plvDetf4lO4 \
//           https://www.youtube.com/embed/-FYqe8N6vAg \
//           https://www.youtube.com/embed/8ZaaoXi2v30 \
//           https://www.youtube.com/embed/Yy4bTKURqo4 \
//           https://www.youtube.com/embed/1Q_i-f0icV0 \
//		   ;                                         \
//		"
//	}
//  ];
//}

export default function Home() {
  //return <Welcome />;
  return (
    <div id="home">
	  <link rel="icon" href={portfolioFavicon}/>
	  <Profile />
	  <Line 
	    color = 'rgb(255, 255, 255, 1)'
		height = '1px'
		width = '70rem'
	  />
	  
	  <SectionContent />
    </div>
  );
}
