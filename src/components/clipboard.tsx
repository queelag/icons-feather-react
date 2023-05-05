import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherClipboardElement } from '@aracna/icons-feather-web/elements/clipboard-element.js'

export const IconFeatherClipboard: ElementComponent<IconFeatherClipboardElement, IconProps> = createBaseElementComponent<
  IconFeatherClipboardElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-clipboard', IconFeatherClipboardElement)
