import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMinimize2Element } from '@aracna/icons-feather-web/elements/minimize-2-element'

export const IconFeatherMinimize2: ElementComponent<IconFeatherMinimize2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMinimize2Element,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-minimize-2', IconFeatherMinimize2Element)
