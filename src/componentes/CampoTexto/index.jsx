import { styled } from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
    padding: 0 27px;
`

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 16px 18px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 602px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img `
    position: absolute;
    height: 32px;
    width: 32px;
    top: 10px;
    right: 30px;
    
`

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura" {...props}/>
            <IconeLupa src={search} alt="Icone de Lupa"/>
        </ContainerEstilizado>
    )
}

export default CampoTexto