import styled from 'styled-components'
interface IButtonStyleComponent {
    color:string;
}
export const Header = styled.div<IButtonStyleComponent>`
background: red;
width:35em
height:250px
color:red
`