import { styled } from 'styled-components'
import tags from './tags.json'

const TagContainer = styled.div`
    display: flex;
    margin-top: 56px;
    align-items: center;
    gap: 10px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    margin-right: 50px;
`

const Tag = styled.button`
    color: #FFFFFF;
    font-size: 24px;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.3);
    padding: 10px 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
        border-color: #C98CF1
    }
`
    

const Tags = () => {
    return (
    <TagContainer>
        <TagTitulo>Busque por tags:</TagTitulo>
        {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
    </TagContainer>
    )
}

export default Tags