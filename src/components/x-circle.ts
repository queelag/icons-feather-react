import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherXCircleElement } from '@aracna/icons-feather-web/elements/x-circle-element'

export const IconFeatherXCircle: ElementComponent<IconFeatherXCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherXCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-x-circle', IconFeatherXCircleElement)
