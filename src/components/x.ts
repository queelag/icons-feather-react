import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherXElement } from '@aracna/icons-feather-web/elements/x-element'

export const IconFeatherX: ElementComponent<IconFeatherXElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherXElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-x', IconFeatherXElement)
