import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherHexagonElement } from '@aracna/icons-feather-web/elements/hexagon-element'

export const IconFeatherHexagon: ElementComponent<IconFeatherHexagonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHexagonElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-hexagon', IconFeatherHexagonElement)
