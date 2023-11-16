import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUnlockElement } from '@aracna/icons-feather-web/elements/unlock-element'

export const IconFeatherUnlock: ElementComponent<IconFeatherUnlockElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUnlockElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-unlock', IconFeatherUnlockElement)
