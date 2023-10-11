import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTypeElement } from '@aracna/icons-feather-web/elements/type-element'

export const IconFeatherType: ElementComponent<IconFeatherTypeElement, IconProps> = createBaseElementComponent<
  IconFeatherTypeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-type', IconFeatherTypeElement)
