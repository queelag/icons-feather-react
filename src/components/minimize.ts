import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMinimizeElement } from '@aracna/icons-feather-web/elements/minimize-element'

export const IconFeatherMinimize: ElementComponent<IconFeatherMinimizeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMinimizeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-minimize', IconFeatherMinimizeElement)
