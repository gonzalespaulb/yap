import Controls from "../Controls/Controls";
import Feed from "../Feed/Feed";
import { MainContainer} from "./styles";

const Yap = () => {
    return (
        <MainContainer>
            <Feed/>
            <Controls/>
        </MainContainer>
    )
}

export default Yap;