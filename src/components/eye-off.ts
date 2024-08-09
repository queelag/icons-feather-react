import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherEyeOffElement } from '@aracna/icons-feather-web/elements/eye-off-element'

export const IconFeatherEyeOff: ElementComponent<IconFeatherEyeOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEyeOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-eye-off', IconFeatherEyeOffElement)
