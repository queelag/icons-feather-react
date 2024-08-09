import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMaximizeElement } from '@aracna/icons-feather-web/elements/maximize-element'

export const IconFeatherMaximize: ElementComponent<IconFeatherMaximizeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMaximizeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-maximize', IconFeatherMaximizeElement)
