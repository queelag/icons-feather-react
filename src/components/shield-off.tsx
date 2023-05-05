import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherShieldOffElement } from '@aracna/icons-feather-web/elements/shield-off-element.js'

export const IconFeatherShieldOff: ElementComponent<IconFeatherShieldOffElement, IconProps> = createBaseElementComponent<
  IconFeatherShieldOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-shield-off', IconFeatherShieldOffElement)
