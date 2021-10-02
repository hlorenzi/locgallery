import * as React from "react"
import styled from "styled-components"


const StyledImage = styled.img<{
    opacity: number,
}>`
    opacity: ${ props => props.opacity };
    transition: opacity 0.1s;
`


const hasObserver = !!window.IntersectionObserver


export function Image(props: {
    src?: string,
    width?: string,
    height?: string,
})
{
    const imgRef = React.useRef<HTMLImageElement>(null)
    const [src, setSrc] = React.useState(hasObserver ? undefined : props.src)
    const [isMissing, setIsMissing] = React.useState(false)
    const [opacity, setOpacity] = React.useState(hasObserver ? 0 : 1)

    
    if (hasObserver)
    {
        React.useEffect(() =>
        {
            if (!imgRef.current)
                return
                
            const intersectObserver = new IntersectionObserver((entries) =>
            {
                for (const entry of entries)
                {
                    if (!entry.isIntersecting)
                        continue
                    
                    //if (entry.target.naturalWidth != 0)
                    //    setOpacity(1)
                    
                    ;(entry.target as HTMLImageElement).onload = () => setOpacity(1)
                    ;(entry.target as HTMLImageElement).onerror = () => setIsMissing(true)
                    setSrc(props.src)
                }
            })

            const imgElem = imgRef.current
            intersectObserver.observe(imgElem)
            return () => intersectObserver.unobserve(imgElem)

        }, [imgRef.current])
    }


    if (isMissing)
    {
        return <div style={{
            width: props.width ?? "20em",
            height: props.height ?? "9em",
            opacity: 0.5,
            color: "#f20",
            display: "grid",
            alignContent: "center",
            justifyContent: "center",
        }}>
            ❌ Missing picture
        </div>
    }


	return <StyledImage
        ref={ imgRef }
        src={ src }
        opacity={ opacity }
        style={{
            objectFit: "contain",
            width: props.width ?? "20em",
            height: props.height ?? "9em",
    }}>
    </StyledImage>
}