import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherEyeOffElement } from '@aracna/icons-feather-web/elements/eye-off-element'

export const IconFeatherEyeOff: ElementComponent<IconFeatherEyeOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEyeOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-eye-off', IconFeatherEyeOffElement)
