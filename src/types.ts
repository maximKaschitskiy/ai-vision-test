export type CSSType = {style: {[key: string]: string | string[]}}

export type ThemeType = {
    colors: { [key: string]: string | string[] },
    fonts: {
      title?: { [key: string]: string | string[] },
      subtitle?: { [key: string]: string | string[] },
      medium?: { [key: string]: string | string[] },
      small?: { [key: string]: string | string[] },
    }
  }

export type StatusType = "fetch" | "ready" | "done"

export type FilesType = {
  file: File,
  status: StatusType
}

export type FakeApiType = (item: FilesType, delay: number) => Promise<{}>

export type AsyncLoopType = (array: FilesType[], callbaack: (status: StatusType, item: number) => void, index: 0 | number) => void

export type FilePropsType = {item: FilesType, index: number}

export type UiType = { input: string, dragged: boolean, validity: boolean }

export type DropzoneType = {
  dragged: boolean;
  validErr: boolean;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}