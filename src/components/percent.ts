import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPercentElement } from '@aracna/icons-feather-web/elements/percent-element'

export const IconFeatherPercent: ElementComponent<IconFeatherPercentElement, IconProps> = createBaseElementComponent<
  IconFeatherPercentElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-percent', IconFeatherPercentElement)
