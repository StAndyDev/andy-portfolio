import './Scene3D.css';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import TWEEN from 'three/examples/jsm/libs/tween.module.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';


const Scene3D = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let container = containerRef.current; //conteneur actuel
        let controls;
        let renderer;
        let scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 10000);
        camera.position.x = 4000;
        camera.position.z = 3000;


        const objects = [];
        const targets = { sphere: [] };
        const table = [
            'Javascript', 'Javascript', '1.00794', 1, 1,
            'PHP', 'Helium', '4.002602', 18, 1,
            'Python', 'Lithium', '6.941', 1, 2,
            'MySQL', 'Beryllium', '9.012182', 2, 2,
            'Three JS', 'Boron', '10.811', 13, 2,
            'TensorFlow', 'Carbon', '12.0107', 14, 2,
            'Java', 'Nitrogen', '14.0067', 15, 2,
            'React', 'Oxygen', '15.9994', 16, 2,
            'Ionic', 'Fluorine', '18.9984032', 17, 2,
            'TypeScript', 'Neon', '20.1797', 18, 2,
            'Angular', 'Sodium', '22.98976...', 1, 3,
            'Ajax', 'Magnesium', '24.305', 2, 3,
            'PostgreSQL', 'Aluminium', '26.9815386', 13, 3,
            'Django', 'Silicon', '28.0855', 14, 3,
            'HSQL', 'Phosphorus', '30.973762', 15, 3,
            'Postman', 'Sulfur', '32.065', 16, 3,
            'Langage C', 'Chlorine', '35.453', 17, 3,
            'Git/Github', 'Argon', '39.948', 18, 3,
            'Docker', 'Potassium', '39.948', 1, 4,
            'JQuery', 'JQuery', '40.078', 2, 4,
            'Laravel', 'Scandium', '44.955912', 3, 4,
            'Flask', 'Titanium', '47.867', 4, 4,
            'Swagger', 'Vanadium', '50.9415', 5, 4,
            'JBoss', 'Chromium', '51.9961', 6, 4,
            'JPA', 'Manganese', '54.938045', 7, 4,
            'TinkerCad', 'Iron', '55.845', 8, 4,
            'QGIS', 'Cobalt', '58.933195', 9, 4,
            'PostGis', 'Nickel', '58.6934', 10, 4,
            'REST', 'REST', '61.03934', 10, 4,
            'JWT', 'JWT', '61.73934', 10, 4,
            'JSON', 'JSON', '61.73934', 10, 4,
            'XML', 'XML', '61.73934', 10, 4,
            'Bootstrap', 'Bootstrap', '61.73934', 10, 4,
        ];

        init();
        animate();

        function init() {

            for (let i = 0; i < table.length; i += 5) {
                const element = document.createElement('div');
                element.className = 'element';
                element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

                const number = document.createElement('div');
                number.className = 'number';
                number.textContent = (i / 5) + 1;
                element.appendChild(number);

                const symbol = document.createElement('div');
                symbol.className = 'symbol';
                symbol.textContent = table[i];
                element.appendChild(symbol);

                const details = document.createElement('div');
                details.className = 'details';
                details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
                element.appendChild(details);

                const objectCSS = new CSS3DObject(element);
                objectCSS.position.x = Math.random() * 4000 - 2000;
                objectCSS.position.y = Math.random() * 4000 - 2000;
                objectCSS.position.z = Math.random() * 4000 - 2000;
                scene.add(objectCSS);

                objects.push(objectCSS);
            }

            const vector = new THREE.Vector3();

            for (let i = 0, l = objects.length; i < l; i++) {
                const phi = Math.acos(-1 + (2 * i) / l);
                const theta = Math.sqrt(l * Math.PI) * phi;

                const object = new THREE.Object3D();
                object.position.setFromSphericalCoords(800, phi, theta);

                vector.copy(object.position).multiplyScalar(2);
                object.lookAt(vector);

                targets.sphere.push(object);
            }

            renderer = new CSS3DRenderer();
            renderer.setSize(container.clientWidth, container.clientHeight);  //taille du conteneur
            container.appendChild(renderer.domElement);

            controls = new TrackballControls(camera, renderer.domElement);
            controls.minDistance = 3000;
            controls.maxDistance = 4000;
            controls.addEventListener('change', render);

            transform(targets.sphere, 2000);

            // window.addEventListener('resize', onWindowResize);
        }
        // fin init

        function transform(targets, duration) {
            TWEEN.removeAll();
            for (let i = 0; i < objects.length; i++) {
                const object = objects[i];
                const target = targets[i];

                new TWEEN.Tween(object.position)
                    .to({
                        x: target.position.x,
                        y: target.position.y,
                        z: target.position.z
                    }, Math.random() * duration + duration)
                    .easing(TWEEN.Easing.Exponential.InOut)
                    .start();

                new TWEEN.Tween(object.rotation)
                    .to({
                        x: target.rotation.x,
                        y: target.rotation.y,
                        z: target.rotation.z
                    }, Math.random() * duration + duration)
                    .easing(TWEEN.Easing.Exponential.InOut)
                    .start();
            }

            new TWEEN.Tween(this)
                .to({}, duration * 2)
                .onUpdate(render)
                .start();
        }
        // fin transform
        
        // function onWindowResize() {
        //     camera.aspect = window.innerWidth / window.innerHeight;
        //     camera.updateProjectionMatrix();
        //     renderer.setSize(window.innerWidth, window.innerHeight);
        //     render();
        // }

        // Gestion du mouvement de la sphère
        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
            controls.update();
            scene.rotation.y += 0.002;
            render();
        }

        function render() {
            renderer.render(scene, camera);
        }

        // enlever le premier div
        const problem = document.querySelector('.sphere-content div div:first-of-type');
        if(problem){
            problem.style.display = 'none';
        }
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100%', display: 'flex' } }></div>;
};

export default Scene3D;