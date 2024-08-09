import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherXElement } from '@aracna/icons-feather-web/elements/x-element'

export const IconFeatherX: ElementComponent<IconFeatherXElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherXElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-x', IconFeatherXElement)
