import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherClipboardElement } from '@aracna/icons-feather-web/elements/clipboard-element'

export const IconFeatherClipboard: ElementComponent<IconFeatherClipboardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherClipboardElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-clipboard', IconFeatherClipboardElement)
