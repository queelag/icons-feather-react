import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFlagElement } from '@aracna/icons-feather-web/elements/flag-element'

export const IconFeatherFlag: ElementComponent<IconFeatherFlagElement, IconProps> = createBaseElementComponent<
  IconFeatherFlagElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-flag', IconFeatherFlagElement)
