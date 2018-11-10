/* @jsx jsxDom */

export function containerTemplate({ id, props, CLASS, on, container, tag, context, outlet, jsxDom }) {
    return (
        <div id={ id }>
            <style>
                {`
                    #${ id } {
                        font-size: 0;
                        width: 100%;
                    }
                    #${ id }.${ tag } {
                        text-align: center;
                    }
                    #${ id } > .${ CLASS.OUTLET } {
                        display: inline-block;
                        min-width: 75px;
                        max-width: 750px;
                        position: relative;
                    }
                    #${ id }.${ tag } > .${ CLASS.OUTLET } {
                        min-width: 75px;
                    }
                    #${ id } > .${ CLASS.OUTLET } {
                        width:  200px;
                        height: 42px;
                    }
                     #${ id }.${ tag } > .${ CLASS.OUTLET } {
                        width: 100%;
                    }
                    #${ id } > .${ CLASS.OUTLET } > iframe {
                        min-width: 100%;
                        max-width: 100%;
                        width: 75px;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.COMPONENT_FRAME } {
                        z-index: 100;
                    }
                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.PRERENDER_FRAME } {
                        transition: opacity .2s linear;
                        z-index: 200;
                    }
                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.VISIBLE } {
                        opacity: 1;
                    }
                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.INVISIBLE } {
                        opacity: 0;
                        pointer-events: none;
                    }
                `}
            </style>
            {outlet}
        </div>
    );
}