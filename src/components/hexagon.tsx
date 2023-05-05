import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHexagonElement } from '@aracna/icons-feather-web/elements/hexagon-element.js'

export const IconFeatherHexagon: ElementComponent<IconFeatherHexagonElement, IconProps> = createBaseElementComponent<
  IconFeatherHexagonElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-hexagon', IconFeatherHexagonElement)
