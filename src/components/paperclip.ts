import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPaperclipElement } from '@aracna/icons-feather-web/elements/paperclip-element'

export const IconFeatherPaperclip: ElementComponent<IconFeatherPaperclipElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPaperclipElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-paperclip', IconFeatherPaperclipElement)
