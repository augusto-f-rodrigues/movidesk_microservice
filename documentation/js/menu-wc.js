'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movidesk_microsservice documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-4cb7f120f614a4abaa8f1335876d0f27dfc1d01fc6cfd92353c660cf62b6fbf8e855a2b254cd5ce47e9d4d27ce13c68c7060945d82be93a790a922f39496cb62"' : 'data-target="#xs-controllers-links-module-AppModule-4cb7f120f614a4abaa8f1335876d0f27dfc1d01fc6cfd92353c660cf62b6fbf8e855a2b254cd5ce47e9d4d27ce13c68c7060945d82be93a790a922f39496cb62"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4cb7f120f614a4abaa8f1335876d0f27dfc1d01fc6cfd92353c660cf62b6fbf8e855a2b254cd5ce47e9d4d27ce13c68c7060945d82be93a790a922f39496cb62"' :
                                            'id="xs-controllers-links-module-AppModule-4cb7f120f614a4abaa8f1335876d0f27dfc1d01fc6cfd92353c660cf62b6fbf8e855a2b254cd5ce47e9d4d27ce13c68c7060945d82be93a790a922f39496cb62"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-4cb7f120f614a4abaa8f1335876d0f27dfc1d01fc6cfd92353c660cf62b6fbf8e855a2b254cd5ce47e9d4d27ce13c68c7060945d82be93a790a922f39496cb62"' : 'data-target="#xs-injectables-links-module-AppModule-4cb7f120f614a4abaa8f1335876d0f27dfc1d01fc6cfd92353c660cf62b6fbf8e855a2b254cd5ce47e9d4d27ce13c68c7060945d82be93a790a922f39496cb62"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4cb7f120f614a4abaa8f1335876d0f27dfc1d01fc6cfd92353c660cf62b6fbf8e855a2b254cd5ce47e9d4d27ce13c68c7060945d82be93a790a922f39496cb62"' :
                                        'id="xs-injectables-links-module-AppModule-4cb7f120f614a4abaa8f1335876d0f27dfc1d01fc6cfd92353c660cf62b6fbf8e855a2b254cd5ce47e9d4d27ce13c68c7060945d82be93a790a922f39496cb62"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MovideskModule.html" data-type="entity-link" >MovideskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MovideskModule-8e7a6bde782231b7a4b3c5a81b023354b842cffd791ea9fff037d3da0cf7af0d3e81524a6b2df22e627ac1d1265a03f47e704787a0fb1dd41f271555524b9c83"' : 'data-target="#xs-controllers-links-module-MovideskModule-8e7a6bde782231b7a4b3c5a81b023354b842cffd791ea9fff037d3da0cf7af0d3e81524a6b2df22e627ac1d1265a03f47e704787a0fb1dd41f271555524b9c83"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MovideskModule-8e7a6bde782231b7a4b3c5a81b023354b842cffd791ea9fff037d3da0cf7af0d3e81524a6b2df22e627ac1d1265a03f47e704787a0fb1dd41f271555524b9c83"' :
                                            'id="xs-controllers-links-module-MovideskModule-8e7a6bde782231b7a4b3c5a81b023354b842cffd791ea9fff037d3da0cf7af0d3e81524a6b2df22e627ac1d1265a03f47e704787a0fb1dd41f271555524b9c83"' }>
                                            <li class="link">
                                                <a href="controllers/MovideskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovideskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MovideskModule-8e7a6bde782231b7a4b3c5a81b023354b842cffd791ea9fff037d3da0cf7af0d3e81524a6b2df22e627ac1d1265a03f47e704787a0fb1dd41f271555524b9c83"' : 'data-target="#xs-injectables-links-module-MovideskModule-8e7a6bde782231b7a4b3c5a81b023354b842cffd791ea9fff037d3da0cf7af0d3e81524a6b2df22e627ac1d1265a03f47e704787a0fb1dd41f271555524b9c83"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MovideskModule-8e7a6bde782231b7a4b3c5a81b023354b842cffd791ea9fff037d3da0cf7af0d3e81524a6b2df22e627ac1d1265a03f47e704787a0fb1dd41f271555524b9c83"' :
                                        'id="xs-injectables-links-module-MovideskModule-8e7a6bde782231b7a4b3c5a81b023354b842cffd791ea9fff037d3da0cf7af0d3e81524a6b2df22e627ac1d1265a03f47e704787a0fb1dd41f271555524b9c83"' }>
                                        <li class="link">
                                            <a href="injectables/MovideskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovideskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});