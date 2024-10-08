import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMinimize2Element } from '@aracna/icons-feather-web/elements/minimize-2-element'

export const IconFeatherMinimize2: ElementComponent<IconFeatherMinimize2Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMinimize2Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-minimize-2', IconFeatherMinimize2Element)
