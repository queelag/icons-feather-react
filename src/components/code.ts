import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCodeElement } from '@aracna/icons-feather-web/elements/code-element'

export const IconFeatherCode: ElementComponent<IconFeatherCodeElement, IconProps> = createBaseElementComponent<
  IconFeatherCodeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-code', IconFeatherCodeElement)
