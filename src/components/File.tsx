import { theme } from "../styles/theme"

import { formatBytes } from "../utils/utils"

import { useDispatch } from "react-redux"
import { removeFiles } from "../redux/slices/files"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

import { FilePropsType } from "../types"

import FileWrapper from "../styles/Blocks/FileWrapper"
import FileIcon from "../styles/Blocks/FileIcon"
import FilenameWrapper from "../styles/Blocks/FilenameWrapper"
import Text from "../styles/Blocks/Text"
import Loader from "../styles/Blocks/Loader"
import RemoveButton from "../styles/Blocks/RemoveButton"
import CloseIcon from "../styles/Blocks/CloseIcon"

import CloseFile from "../assets/circle-close-o_1.svg"
import IconFile from "../assets/file-outlined_1.svg"
import DoneFile from "../assets/checkmark-circle-outline_3.svg"

const File = ({ item, index }: FilePropsType) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeFiles(index))
    }

    const files = useSelector((state: RootState) => state.files)

    const status = () => {
        switch (true) {
            case item.status === "done":
                return <CloseIcon src={DoneFile}></CloseIcon>

            case item.status === "fetch":
                return <Loader load={true}></Loader>

            case item.status === "ready":
                return <CloseIcon src={CloseFile}></CloseIcon>
        }
    }

    return (
        <FileWrapper status={item.status === "done"}>
            <FileIcon src={IconFile} />
            <FilenameWrapper>
                <Text style={{ ...theme.fonts.medium, color: theme.colors.textDark, fontWeight: "500", width: "50%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", textAlign: "left" }}>{item.file.name}</Text>
                <Text style={{ marginLeft: "auto" }}>{formatBytes(item.file.size, 1)}</Text>
            </FilenameWrapper>
            <RemoveButton disabled={files.some(item => item.status === 'fetch')} onClick={handleClick}>
              {status()}
            </RemoveButton>
        </FileWrapper>
    )
}

export default File
