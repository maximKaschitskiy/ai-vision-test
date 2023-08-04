import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

import uniqid from "uniqid";

import FilesWrapper from "../styles/Blocks/FilesWrapper"

import File from "./File"

const Files = () => {

    const files = useSelector((state: RootState) => state.files)

    return (
        <FilesWrapper>
            { files.map((item, index) => <File item={item} index={index} key={uniqid()} />) }
        </FilesWrapper>
    )
}

export default Files
