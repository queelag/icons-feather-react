import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPaperclipElement } from '@aracna/icons-feather-web/elements/paperclip-element'

export const IconFeatherPaperclip: ElementComponent<IconFeatherPaperclipElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPaperclipElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-paperclip', IconFeatherPaperclipElement)
