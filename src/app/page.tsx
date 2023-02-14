// @ts-nocheck
'use client';
import { useState, useEffect } from 'react';

import styles from './page.module.css';
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { Excalidraw } from "@excalidraw/excalidraw";
import * as initialData from "../dummyData/intialData.json"

export default function Home() {
	// need wait until doc mounts before rendering Excalidraw as not compatible with SSR
  // Type 'typeof import("/Users/ailishmccarthy/Code/pedagogical/pedagogical_app/node_modules/@excalidraw/excalidraw/types/packages/excalidraw/index")' provides no match for the signature '(prevState: null): null'.
  
	const [Comp, setComp] = useState<ExcalidrawElement | undefined>(undefined);

  useEffect(() => {
    import("@excalidraw/excalidraw").then((comp) => setComp(comp.default));
  }, []);

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1>🎓 Welcome to Pedagogical 🎓</h1>
			</div>
			<div className={styles.excalidrawwrapper}>
				{/* {Comp && <Comp initialData={initialData} />} */}
          <Excalidraw initialData={initialData}/>
        </div>
		</main>
	);
}
