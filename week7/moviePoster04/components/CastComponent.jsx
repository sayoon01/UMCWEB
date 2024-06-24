import styled from 'styled-components';

function CastComponent({image, name}) {
    const firstName = name.split(' ')[0];
    const imageUrl = image.endsWith('null') ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RVVUS3niN1YQ&s` : image;

    return(
        <CastBox>
            <Image src={imageUrl} alt={name}/>
            <NameText>{firstName}</NameText>
        </CastBox>
    );
}

const CastBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
`;

const Image = styled.img`
    width: 90%;
    height: 70%;
    object-fit: cover;
    border-radius: 50%;
`;

const NameText = styled.p`
    font-size: 15px;
    color: white;
`;

export default CastComponent;