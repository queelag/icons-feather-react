import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherClipboardElement } from '@aracna/icons-feather-web/elements/clipboard-element'

export const IconFeatherClipboard: ElementComponent<IconFeatherClipboardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherClipboardElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-clipboard', IconFeatherClipboardElement)
