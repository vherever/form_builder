export namespace IconsRepository {
  export enum IconsEnum {
    DragDots = 'dragdots',
    Search = 'search'
  }

  export const iconsSvgData = [
    {
      id: IconsEnum.DragDots,
      data: `
        <svg class="" width="12" height="14" enable-background="new 0 0 512 512" viewBox="0 0 24 24"
            xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle cx="8" cy="4" r="2" xmlns="http://www.w3.org/2000/svg"/>
            <circle cx="8" cy="12" r="2" data-original="#000000" xmlns="http://www.w3.org/2000/svg"/>
            <circle cx="8" cy="20" r="2" data-original="#000000" xmlns="http://www.w3.org/2000/svg"/>
            <circle class="" cx="16" cy="4" r="2" data-original="#000000" xmlns="http://www.w3.org/2000/svg"/>
            <circle class="" cx="16" cy="12" r="2" data-original="#000000" xmlns="http://www.w3.org/2000/svg"/>
            <circle class="" cx="16" cy="20" r="2" data-original="#000000" xmlns="http://www.w3.org/2000/svg"/>
          </g>
        </svg>
      `,
    },
    {
      id: IconsEnum.Search,
      data: `
          <svg class="" enable-background="new 0 0 512 512" version="1.1" width="24" height="24"
            viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <g xmlns="http://www.w3.org/2000/svg">
                <path class="" d="m302.06 0c-115.76 0-209.94 94.18-209.94 209.94 0 50.697 18.064 97.253 48.092 133.57l-140.21 140.21 28.276 28.276 140.21-140.21c36.321 30.028 82.877 48.092 133.57 48.092 115.76 0 209.94-94.18 209.94-209.94s-94.179-209.94-209.94-209.94zm0 379.9c-93.712 0-169.95-76.241-169.95-169.95s76.241-169.95 169.95-169.95 169.95 76.241 169.95 169.95-76.241 169.95-169.95 169.95z" data-original="#000000"/>
            </g>
          </svg>
      `,
    },
  ];
}
