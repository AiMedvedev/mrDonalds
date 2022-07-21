import styled from 'styled-components';
import bannerImg from '../../image/banner.png';

export const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${bannerImg});
    background-position: center;
    background-size: cover;
`;