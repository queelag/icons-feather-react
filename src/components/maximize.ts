import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMaximizeElement } from '@aracna/icons-feather-web/elements/maximize-element'

export const IconFeatherMaximize: ElementComponent<IconFeatherMaximizeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMaximizeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-maximize', IconFeatherMaximizeElement)
