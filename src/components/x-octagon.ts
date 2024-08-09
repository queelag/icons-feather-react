import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherXOctagonElement } from '@aracna/icons-feather-web/elements/x-octagon-element'

export const IconFeatherXOctagon: ElementComponent<IconFeatherXOctagonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherXOctagonElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-x-octagon', IconFeatherXOctagonElement)
