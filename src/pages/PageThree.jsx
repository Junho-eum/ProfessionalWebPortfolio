import React, { useState, useEffect, useRef } from 'react';
import '../components/styles/Page3.css';

function PageThree() {
    const title = "Document Classifier Algorithm"
    const subtitle = "implemented with heap data structure"
    const introDescription = "This paper presents an approach to cluster documents using term frequency-inverse document frequency (TF-IDF) to identify the most important terms in each document and then using cosine similarity implemented by heap data structures to sort the documents based on their cosine similarity to the root document."
    const [currentId, setCurrentId] = useState(null);
    const [currentTab, setCurrentTab] = useState(null);
    const tabContainerHeight = 70;

    const tabContainerRef = useRef(null);
    const tabSliderRef = useRef(null);

    // Event Handlers
    const onScroll = () => {
        checkTabContainerPosition();
        findCurrentTabSelector();
    };

    const checkTabContainerPosition = () => {
        const tabContainer = tabContainerRef.current;
        let offset = tabContainer.getBoundingClientRect().top + tabContainer.getBoundingClientRect().height - tabContainerHeight;
        if (window.scrollY > offset) {
            tabContainer.classList.add('et-hero-tabs-container--top');
        } else {
            tabContainer.classList.remove('et-hero-tabs-container--top');
        }
    };

    const findCurrentTabSelector = () => {
        let newCurrentId;
        let newCurrentTab;
        const tabs = document.querySelectorAll(".et-hero-tab");
        tabs.forEach(tab => {
            let id = tab.getAttribute("href");
            let target = document.querySelector(id);
            let offsetTop = target.offsetTop - tabContainerHeight;
            let offsetBottom = target.offsetTop + target.offsetHeight - tabContainerHeight;
            if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = tab;
            }
        });
        if (currentId !== newCurrentId || currentId === null) {
            setCurrentId(newCurrentId);
            setCurrentTab(newCurrentTab);
            setSliderCss();
        }
    };

    const setSliderCss = () => {
        let width = 0;
        let left = 0;
        if (currentTab) {
            width = getComputedStyle(currentTab).width;
            left = currentTab.getBoundingClientRect().left;
        }
        const slider = tabSliderRef.current;
        slider.style.width = width;
        slider.style.left = `${left}px`;
    };

    // Use Effects
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div>
            <section className="et-hero-tabs">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <div className="et-hero-tabs-container" ref={tabContainerRef}>
                    <a className="et-hero-tab" href="#tab-es6">INTRO</a>
                    <a className="et-hero-tab" href="#tab-flexbox">EXPERIMENTATION</a>
                    <a className="et-hero-tab" href="#tab-react">HEAP</a>
                    <a className="et-hero-tab" href="#tab-angular">COSINE SIMILARITY</a>
                    <a className="et-hero-tab" href="#tab-other">README</a>
                    <span className="et-hero-tab-slider" ref={tabSliderRef}></span>
                </div>
            </section>
            <main className="et-main">
                <section className="et-slide" id="tab-es6">
                    <h1>INTRO</h1>
                    <h3>{introDescription}</h3>
                </section>
                <section className="et-slide" id="tab-flexbox">
                    <h1>EXPERIMENTATION</h1>
                    <h3>something about flexbox</h3>
                </section>
                <section className="et-slide" id="tab-react">
                    <h1>React</h1>
                    <h3>something about react</h3>
                </section>
                <section className="et-slide" id="tab-angular">
                    <h1>HEAP</h1>
                    <h3>something about angular</h3>
                </section>
                <section className="et-slide" id="tab-other">
                    <h1>README</h1>
                    <h3>something about other</h3>
                </section>
            </main>
        </div>
    );
}


export default PageThree;
