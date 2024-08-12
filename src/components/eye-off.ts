import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherEyeOffElement } from '@aracna/icons-feather-web/elements/eye-off-element'

export const IconFeatherEyeOff: ElementComponent<IconFeatherEyeOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEyeOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-eye-off', IconFeatherEyeOffElement)
