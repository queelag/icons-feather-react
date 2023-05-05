import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPaperclipElement } from '@aracna/icons-feather-web/elements/paperclip-element.js'

export const IconFeatherPaperclip: ElementComponent<IconFeatherPaperclipElement, IconProps> = createBaseElementComponent<
  IconFeatherPaperclipElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-paperclip', IconFeatherPaperclipElement)
