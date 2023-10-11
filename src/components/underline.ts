import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUnderlineElement } from '@aracna/icons-feather-web/elements/underline-element'

export const IconFeatherUnderline: ElementComponent<IconFeatherUnderlineElement, IconProps> = createBaseElementComponent<
  IconFeatherUnderlineElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-underline', IconFeatherUnderlineElement)
